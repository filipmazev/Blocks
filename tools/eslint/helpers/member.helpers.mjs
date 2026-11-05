import { ANGULAR_FIELD_GROUPS, LIFECYCLE_METHODS } from '../constants/member-order.constants.mjs';
import { getAngularImport, getInitializerCall, isInjectedInitializer } from './angular.helpers.mjs';

export function getMemberRank(sourceCode, member) {
  const visibility = member.key?.type === 'PrivateIdentifier' ? 'private' : (member.accessibility ?? 'public');
  const readonlyVisibility = ['private', 'protected', 'public'].indexOf(visibility);
  const mutableVisibility = ['public', 'protected', 'private'].indexOf(visibility);

  if (['PropertyDefinition', 'TSAbstractPropertyDefinition', 'AccessorProperty', 'TSAbstractAccessorProperty'].includes(member.type)) {
    const call = getInitializerCall(member.value);
    const angularFunction = isInjectedInitializer(sourceCode, member.value) ? 'inject' : (getAngularImport(sourceCode, call?.callee) ?? getDeclaredApi(member));

    if (angularFunction === 'inject') {
      return readonlyVisibility;
    }

    return member.readonly ? 10 + readonlyVisibility * 10 + (ANGULAR_FIELD_GROUPS[angularFunction] ?? 1) : 40 + mutableVisibility * 10;
  }

  if (['MethodDefinition', 'TSAbstractMethodDefinition'].includes(member.type)) {
    if (member.kind === 'constructor') {
      return 70;
    }

    const lifecycleIndex = !member.static && member.kind === 'method' ? LIFECYCLE_METHODS.indexOf(member.key.name) : -1;

    return lifecycleIndex >= 0 ? 80 + lifecycleIndex : 100 + mutableVisibility;
  }

  return 69;
}

export function getMemberGroup(sourceCode, member) {
  if (!['PropertyDefinition', 'TSAbstractPropertyDefinition', 'AccessorProperty', 'TSAbstractAccessorProperty'].includes(member.type)) {
    return undefined;
  }

  const visibility = member.key?.type === 'PrivateIdentifier' ? 'private' : (member.accessibility ?? 'public');
  const call = getInitializerCall(member.value);
  let purpose = isInjectedInitializer(sourceCode, member.value) ? 'inject' : (getAngularImport(sourceCode, call?.callee) ?? getDeclaredApi(member) ?? 'field');

  if (purpose === 'signal' || purpose === 'linkedSignal') {
    const initial = call.arguments[0];

    purpose += initial?.type === 'Literal' ? `:${initial.value === null ? 'nullable' : typeof initial.value}` : ':value';
  }

  return `${visibility}:${member.readonly ? 'readonly' : 'mutable'}:${purpose}`;
}

function getDeclaredApi(member) {
  const type = member.typeAnnotation?.typeAnnotation;
  const name = type?.type === 'TSTypeReference' && type.typeName.type === 'Identifier' ? type.typeName.name : undefined;

  if (['InputSignal', 'InputSignalWithTransform', 'ModelSignal'].includes(name)) {
    return 'input';
  }

  return name === 'OutputEmitterRef' ? 'output' : undefined;
}

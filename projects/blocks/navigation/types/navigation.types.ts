import { ResolvableText } from '@filip.mazev/blocks/core';

import { INavContext } from '@navigation/interfaces/inav-context.interface';

export type NavText = ResolvableText | ((ctx: INavContext) => ResolvableText);

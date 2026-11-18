# IndexedDB storage

Promise-based, typed access to IndexedDB with shared connection ownership and declarative store upgrades.

## Import

```typescript
import { IndexedDbService, IIndexedDbStore } from '@filip.mazev/blocks/core';
```

## Usage

```typescript
import { inject } from '@angular/core';
import { IndexedDbService } from '@filip.mazev/blocks/core';

const indexedDb = inject(IndexedDbService);

const database = await indexedDb.open('my-app-db', 1, [{ name: 'items', keyPath: 'id' }]);
await indexedDb.put(database, 'items', { id: 'a', title: 'First' });
const items = await indexedDb.getAll<{ id: string; title: string }>(database, 'items');
```

`IndexedDbService` is provided in root. `supported` reports whether IndexedDB is usable in the current context; server rendering reports false; blocked or
unavailable storage rejects opens without throwing synchronously. Browser support does not guarantee storage permission or quota.

## API

`supported` reports whether IndexedDB is usable in the current context. `open(name, version, stores)` opens or upgrades a named database and returns the shared
connection; `close(name)` closes it. `transaction(database, store, mode, operation)` runs one store-scoped transaction and rejects on request or transaction
failure. Write promises resolve only after commit; operation failures abort the transaction. Enqueue requests immediately or after awaiting another IndexedDB
request from this service; do not await network calls, timers or unrelated work inside the transaction. The convenience helpers map directly to native requests:
`get`, `getAll`, `put`, `delete`, `clear` and `count`, plus `request(request)` for composing a custom request inside a transaction.

`IIndexedDbStore` describes a store's `name`, optional `keyPath`, `autoIncrement` and typed `IIndexedDbIndex` list for upgrade. Reuse one opened connection per
database; `open` with the same name and version returns the existing connection. A different version reopens the database. Increment the version to add stores
or missing indexes; existing data is retained. Changing existing key paths or index definitions requires an application-owned migration. Compose multi-step work
inside `transaction` for atomic writes.

## Appearance and customization

The interactive example uses public Blocks components, semantic theme variables, and shared spacing and responsive helpers. It follows the active playground
appearance. Open the source tab for the component and template.

## Behavior and accessibility

Opening and mutations are asynchronous and never block initial rendering. Failed operations reject so callers can surface an explicit error instead of silently
discarding data. The demo announces status changes politely, disables actions when storage is unavailable, and clears its database connection on teardown.

## Playground

Open `/utilities/indexed-db` from **Core → Utilities → IndexedDB storage**. Add, count and clear records, and reload the page to confirm they persist. The demo
appears first, followed by separate documentation and code tabs.

Return to the [utilities overview](../../README.md) for the coverage audit and related feature guides.

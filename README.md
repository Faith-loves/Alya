# Alya

Alya is a private, local-first personal life operating system. Phase 1 currently includes the Moonlit Orchid design system, responsive shell, theme persistence, a Dexie/IndexedDB task system, and the first Today dashboard experience.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Privacy notes

Records are stored in this browser's IndexedDB and are not sent to a server. Clearing browser storage can remove local records, and data does not automatically synchronize between devices. Encryption and backup/restore are not implemented yet. No reliable background notifications are promised.

## Phase 1 status

The shell and Today experience are functional. Career repository/schema groundwork is present for the next UI pass. Planner, Wellness, Routines, My Space, and Settings currently remain intentional follow-on destinations rather than fabricated functionality.

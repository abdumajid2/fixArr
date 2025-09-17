# FixAR Starter (Monorepo)

Next.js web + Express API + Prisma schema (mock endpoints for Vision/Guide/Price).

## Structure
```
fixar/
├─ apps/
│  ├─ web/      # Next.js PWA with camera scan
│  └─ api/      # Express API mocks
└─ packages/
   └─ db/       # Prisma schema
```

## Quick start
```bash
npm i
npm run dev:api    # 4000
npm run dev:web    # 3000
```

# murphy-interview

## Setup

- Add Node v.20
- Install: pnpm install
- Start server & webapp: pnpm dev

## TODO's

- Implement debtor backend route GET debtors/:id (packages/backend/src/routes/debtors.ts)
- Fetch debtor list & debtor details from webapp (packages/frontend/src/components)
- Implement next conversation chooser (packages/backend/src/services/interaction-chooser.ts)
- Display next conversation chooser per customer in FE

## Extra's

- How would you organize the code to avoid direct dependencies between the datasource and the routes.
- How would you optimize the BE calls from the FE.
- How would you split the React components from the data fetching.

## Architecture question

- Link: https://app.eraser.io/workspace/7EupBAGMUvkCmDeHotZR?origin=share
- In a real case scenario with thousands of emails per hour, how would you scale the backend? How would you deal with email/sms providers rate limits.

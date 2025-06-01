# Murphy Interview Project

Welcome to the Murphy technical interview project.

The goal of this project is to assess your ability to:

✅ Build a small full-stack feature  
✅ Design clean architecture  
✅ Write maintainable, testable code  
✅ Communicate your decisions

---

## Project Overview

This is a simplified monorepo with:

- `packages/backend` — Node.js + Express backend
- `packages/frontend` — React frontend (minimal starter)

---

## Setup

### Requirements

- Node.js 20.x
- `pnpm` (install globally: `npm i -g pnpm`)

---

### Install dependencies

```bash
pnpm install
```

---

## Scenario

Our system helps companies manage their accounts receivable and automate customer interactions for outstanding debts.

Each debtor in our system has:

- Contact information
- An outstanding balance
- A history of previous interactions (emails, calls, letters, etc)

Business goal:
We want to automatically

For this exercise, you'll implement a features that:

✅ Selects the next best interaction for a given debtor (if any) based on past interactions.
✅ Exposes this suggestion via an API
✅ Returns clean, structured data to the frontend

---

## Tasks

### 1️⃣ Backend

#### Implement the following routes:

- `GET /api/debtors/:id`  
  → in: `packages/backend/src/routes/debtors.ts`

- `GET /api/debtors`  
  → in: `packages/backend/src/routes/debtors.ts`

You are free to structure the backend as you see fit.

You may add new folders such as `controllers`, `usecases`, etc — we are interested in seeing how you think about **separation of concerns** and **clean architecture**.

---

#### Business logic

Implement the "next interaction" logic.

You may implement this logic in: /packages/backend/src/services/interaction-chooser.ts

---

#### Testing

Please add at least:

- Unit tests for your `chooseNextInteraction` logic.
- (Optional but encouraged) Integration test for `/api/debtors/:id`.

---

### 2️⃣ Frontend

Implement a simple view that:

- Fetches and displays debtor details from your API.

Frontend architecture is also up to you — we’d like to see **clean separation** between:

- Data fetching
- UI presentation

---

## Bonus Questions

1. How would you decouple the data source from your route handlers?
2. How would you optimize backend calls if displaying a list of 10,000 debtors?
3. How would you separate React components from data fetching logic?
4. How would you extend the interaction chooser logic to support new interaction types in the future?

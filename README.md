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

## Scenario

Our system manages debtors and helps automate interactions with them.

You will implement a feature that selects the **next interaction** to perform for a debtor, and exposes it through an API.

---

## Tasks

### 1️⃣ Backend

#### Implement the following routes:

- `GET /api/debtors/:id`  
  → in: `packages/backend/src/routes/debtors.ts`

- `GET /api/debtors`  
  → in: `packages/backend/src/routes/debtors.ts`

---

#### Business logic

Implement the "next interaction" logic.

You may implement this logic in: /packages/backend/src/services/interaction-chooser.ts

You are free to structure the backend as you see fit.

---

#### Architecture

You may add new folders such as `controllers`, `usecases`, etc — we are interested in seeing how you think about **separation of concerns** and **clean architecture**.

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

Please answer these questions in a file called `TECH_NOTES.md`:

1. How would you decouple the data source from your route handlers?
2. How would you optimize backend calls if displaying a list of 10,000 debtors?
3. How would you separate React components from data fetching logic?
4. How would you extend the interaction chooser logic to support new interaction types in the future?

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

# ophelus

A powerful AI-based gamification productivity app that uses result oriented tracking and dynamic adapation to fight for your dreams and discovery your best self

# Frameworks used

## Frontend

Framework: next.js Extended frontend (5%)
UI Framework: tailwind.css (5%)

## Backend

Authentication: nextauth with jwt

## App Specific

Payment: stripe
AI: openai

# Ophelus Productivity Model

Ophelus Model Productivity Object

- habits: the simplest type of productivity object, a habit is a task that is done on a regular basis, this will help boost your wellbeing which will be a factor in the quality of work criteria
- projects: a very versatile type of productivity object that represents a temporary module with a set period of time
  this productivity object is filled with both individual tasks and collaboration tasks tasks are encapsulated in milestones with deadlines
- goals: a very abstract type of productivity object that represents interest or vision that is broken down into smaller projects (each goal will be set as long term projects) goals will be based on a skill tree (work in progress)
- challenge: a type of productivity object that is time sensitive and temporary with 1 or more people (this type of object will have deadlines and milestones defined by the system)

# notes on previous vigama projects for tracking purposes

vigama-buildspace: literally a create-react-app with task and tasklist
vigama-v1: a next.js project with a timer, and some backend models and configs (small) (the ONLY potential project to fork based, but even then i can just create a new one)
vigama-v2: literally just a next.js template
vigama: literally just a readme
vigama-alpha: literally just a playground

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next.js stuff

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
  The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

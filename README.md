# Legal Portal Beta (Next.js + NextAuth + Stripe on Vercel)

A minimal, production-ready starter to launch a subscription-based employer/legal portal.

## Tech
- **Next.js (App Router)**
- **NextAuth v5 (GitHub OAuth, JWT)** — no database required for the beta
- **Stripe** (Checkout + Webhooks) — subscriptions
- Deployed on **Vercel**

## Quick Start

1) **Create repo & deploy on Vercel**
- Push this folder to GitHub.
- On Vercel: New Project → Import repo → Deploy.

2) **Configure Environment Variables (Vercel → Settings → Environment Variables)**
- From `.env.example`, add:
  - `GITHUB_ID` / `GITHUB_SECRET` (create an OAuth app on GitHub)
  - `NEXTAUTH_SECRET` (generate with `openssl rand -base64 32`)
  - `STRIPE_SECRET_KEY`
  - `STRIPE_PRICE_ID`
  - `STRIPE_WEBHOOK_SECRET` (after creating a webhook)
  - `STRIPE_SUCCESS_URL` / `STRIPE_CANCEL_URL`
  - `PORTAL_NAME` (optional branding)

3) **Stripe Setup**
- Create a **Product** + **Recurring Price** → copy `STRIPE_PRICE_ID`.
- In Stripe dashboard, add a **Webhook** to your Vercel deployment
  (e.g. `https://your-domain.vercel.app/api/stripe/webhook`) with events:
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`

## Local Dev

```bash
npm i
cp .env.example .env.local
npm run dev
```

## Notes
- **Access control** for /dashboard requires login via GitHub OAuth.
- Stripe Checkout creates the subscription; the webhook marks session as paid and you can extend it to persist subscription state.
- For the beta, state is stored in session/JWT; for production, add a DB (e.g., Postgres + Prisma) to persist orgs, users, subscriptions, and roles.

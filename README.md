# pulse SaaS Assessment

A customer-facing SaaS website and analytics dashboard built with Next.js, React, Tailwind CSS and Recharts.

## Included

- Marketing landing page
- Creative hero section
- Features
- How it works
- Testimonials
- Pricing
- FAQ accordion
- CTA and footer
- Responsive analytics dashboard
- Revenue, users, conversion and orders cards
- Revenue and conversion charts
- API/mock-API driven data
- Transactions table
- Customers section
- Search
- Status filtering
- Sorting
- Pagination
- Loading states
- Empty states
- Error states
- Vercel-ready Next.js App Router project

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

Dashboard:
http://localhost:3000/dashboard

## Build

```bash
npm run build
npm start
```

## Deployment

Push this repository to GitHub and import the repository into Vercel. No environment variables are required.

## API routes

- GET /api/dashboard
- GET /api/transactions?page=1&limit=6&search=&status=all&sort=date-desc
- GET /api/customers

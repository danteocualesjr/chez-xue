# Chez Xue

  A faithful clone of the [Chez Xue](https://chez-xue.replit.app/) restaurant website — a brutalist Chinese fine-dining experience in Foster City, CA.

  ## Stack

  - **Frontend**: React + Vite + TypeScript
  - **Styling**: Tailwind CSS v4 + shadcn/ui
  - **Routing**: Wouter
  - **Animations**: Framer Motion
  - **Fonts**: Space Grotesk (headings) + Inter (body)
  - **Monorepo**: pnpm workspaces

  ## Design

  Bold brutalist aesthetic with:
  - Cream/beige background (`#F4F1EB`)
  - Red accent (`#E6392D`)
  - Yellow CTA (`#FFCC00`)
  - Sharp 0px border radius throughout
  - ALL CAPS typography

  ## Pages

  - **Home** — Split hero, feature cards, gallery preview, equitable hospitality
  - **Menu** — "Culinary Schema" with brutalist dish names and pricing
  - **Gallery** — "Form & Texture" masonry grid
  - **Reservations** — Booking form with time slots
  - **Story** — Restaurant history and philosophy
  - **Contact** — Location and contact form

  ## Running Locally

  ```bash
  pnpm install
  pnpm --filter @workspace/chez-xue run dev
  ```
  
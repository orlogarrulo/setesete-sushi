# Sete Sete – Sushi Delivery (Luanda)

Website + Order Management Agent for **Sete Sete**.

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Ready for Vercel deployment

## Features (Phase 1)
- Beautiful landing page (Portuguese primary)
- Menu page (placeholder items – easy to update)
- Order form (`/pedir`) that creates a structured order and opens WhatsApp with a ready message
- Simple Admin page (`/admin`) to see incoming website orders
- WhatsApp deep links using your number: **+244 974 506 949**

## Pages
| Route       | Description                          |
|-------------|--------------------------------------|
| `/`         | Home / Landing                       |
| `/menu`     | Menu                                 |
| `/pedir`    | Order form → WhatsApp                |
| `/admin`    | Order management (temporary in-memory) |

## How to run locally

```bash
cd setesete-sushi
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import the repo
3. Deploy (zero config needed)

Or use the Vercel CLI:

```bash
npx vercel
```

## Next improvements (Phase 2)
- Connect real database (Supabase recommended – free & easy)
- Replace placeholder menu with real items + prices + photos
- Add your real logo (replace the component in `src/components/Logo.tsx`)
- Email confirmations with Resend
- Protect `/admin` with a simple password
- Status change buttons in admin
- Full multi-language support

## Important notes
- Orders are currently stored **in memory**. They disappear when the server restarts.
- For production you must connect a real database.
- The logo is a clean text + mark version. Replace it with your Instagram logo when you have the high-quality file.

---

Built for Sete Sete • Luanda, Angola

# Facebook Login with Next.js

A complete Facebook authentication system built with Next.js 16, NextAuth.js, and TypeScript.

## Features

- ✅ Facebook OAuth 2.0 Authentication
- ✅ Secure session management with NextAuth.js
- ✅ Protected dashboard page
- ✅ Beautiful UI with Tailwind CSS
- ✅ TypeScript support
- ✅ Automatic redirects after login/logout

## Setup Instructions

### 1. Environment Variables

The `.env.local` file is already configured with your Facebook credentials:

- Facebook App ID: 847616724309556
- Facebook App Secret: 999d0bb1602f31981d0021ab0ad71daa

### 2. Facebook App Configuration

**IMPORTANT:** Before running the app, configure your Facebook App:

1. Go to [Facebook Developers Console](https://developers.facebook.com/)
2. Select your app (App ID: 847616724309556)
3. Navigate to **Facebook Login** > **Settings**
4. Add these **Valid OAuth Redirect URIs**:
   ```
   http://localhost:3000/api/auth/callback/facebook
   ```
5. Add **Privacy Policy URL** (required to fix "Currently Ineligible for Submission"):
   ```
   http://localhost:3000/privacy
   ```
6. Add **Terms of Service URL** (optional):
   ```
   http://localhost:3000/terms
   ```
7. Save changes

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
app/
├── api/
│   └── auth/
│       └── [...nextauth]/
│           └── route.ts          # NextAuth API configuration
├── dashboard/
│   └── page.tsx                  # Protected dashboard page
├── layout.tsx                    # Root layout with AuthProvider
├── page.tsx                      # Login page (index)
├── providers.tsx                 # NextAuth SessionProvider wrapper
└── globals.css                   # Global styles

.env.local                        # Environment variables (not in git)
```

## Pages

### Login Page (`/`)

- Beautiful gradient UI with Facebook branding
- "Continue with Facebook" button
- Automatic redirect to dashboard after login

### Dashboard (`/dashboard`)

- Protected route (requires authentication)
- Displays user profile information (name, email, avatar)
- Sign out functionality
- Only accessible when logged in

## How It Works

1. **User visits `/`** → Sees login page
2. **Clicks "Continue with Facebook"** → Redirected to Facebook OAuth
3. **Grants permissions on Facebook** → Redirected back to app
4. **NextAuth creates session** → User redirected to `/dashboard`
5. **Dashboard shows user info** → User can sign out

## Troubleshooting

### "Currently Ineligible for Submission" Error

If you see this error on Facebook, ensure:

- Privacy Policy URL is added in Facebook App settings
- User Data Deletion URL is configured
- App is in development mode (this is normal for testing)

### "Redirect URI Mismatch"

Make sure the OAuth redirect URI in Facebook App settings matches:

```
http://localhost:3000/api/auth/callback/facebook
```

### Node.js Version Warning

You're currently using Node.js v18.20.7. Next.js 16 requires Node.js >=20.9.0.
Consider upgrading for full compatibility.

## Production Deployment

Before deploying to production:

1. Generate a secure `NEXTAUTH_SECRET`:

   ```bash
   openssl rand -base64 32
   ```

   Update `.env.local` with the generated secret

2. Update `NEXTAUTH_URL` in `.env.local` to your production URL

3. Add your production URL to Facebook App's OAuth Redirect URIs

4. Switch Facebook App from Development to Live mode

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [NextAuth.js Documentation](https://next-auth.js.org/) - authentication for Next.js
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login/)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Supabase Partner Gallery Example

An example Next.js website that shows Postgres Full Text Search, `next-image` with Supabase Storage, and sending emails based on an insert trigger with Supabase Edge Functions.

[![Partner Gallery screenshot](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-screenshot.png)](https://supabase.com/partners)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fpartner-gallery-example&env=SUPABASE_HOSTNAME,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY&envDescription=Find%20them%20in%20your%20Supabase%20Dashboard&envLink=https%3A%2F%2Fapp.supabase.io%2Fproject%2F_%2Fsettings%2Fapi&project-name=supabase-partner-gallery&repo-name=supabase-partner-gallery&root-directory=app)

# Usage

1. Create a new Supabase project, or use an existing one
2. Run the `schema.sql` file in the Supabase dashboard to create the relevant tables
3. Update the environment variables (either in Vercel or locally) with Supabase URL and Anon Key

- Locally: `cp app/.env.local.example app/.env.local`

4. Deploy Supabase Edge Function for contact form notifications:

```
supabase link --project-ref your-project-ref
supabase secrets set SMTP_HOSTNAME="your.hostname.com" SMTP_PORT="2587" SMTP_USERNAME="your_username" SMTP_PASSWORD="your_password" SMTP_FROM="no-reply@example.com" SMTP_TO="you@example.com" FUNCTION_SECRET="your-random-secret"
supabase functions deploy contact-notification
```

Note: `SMTP_PORT` must be a port other than `25`, `465`, and `587` as Deno Deploy does not support outgoing connections to ports. AWS SES (port 2587) is recommended.

5. Setup a Supabase Function Hook to trigger the function when a new row is inserted into `partner_contacts`
   ![function hook setup 1](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-1.png)
   ![function hook setup 2](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-2.png)
6. Within Vercel project settings, ensure Framework Preset is set to `Next.js` and Root Directory is set to `app`.
6. Insert partners into the `partners` table.
7. Celebrate together 🎉

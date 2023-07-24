# Supabase Partner Gallery Example

An example Next.js website that shows Postgres Full Text Search, `next-image` with Supabase Storage, and sending emails based on an insert trigger with Supabase Edge Functions.

[![Partner Gallery screenshot](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-screenshot.png)](https://supabase.com/partners)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fpartner-gallery-example&project-name=supabase-partner-gallery-example&repository-name=supabase-partner-gallery-example&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6&external-id=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fpartner-gallery-example%2Ftree%2Fmain&root-directory=app)

# Usage

1. Click the "Deploy" button above and run through the setup steps. This will automatically set your Supabase env vars and set up the Database schema located in the [migrations folder](./supabase/migrations/20230712074829_init.sql).
2. Deploy Supabase Edge Function for contact form notifications:

	```
	supabase link --project-ref your-project-ref
	supabase secrets set SMTP_HOSTNAME="your.hostname.com" SMTP_PORT="2587" SMTP_USERNAME="your_username" SMTP_PASSWORD="your_password" SMTP_FROM="no-reply@example.com" SMTP_TO="you@example.com" FUNCTION_SECRET="your-random-secret"
	supabase functions deploy contact-notification
	```

	Note: `SMTP_PORT` must be a port other than `25`, `465`, and `587` as Deno Deploy does not support outgoing connections to ports. AWS SES (port 2587) is recommended.

3. Setup a Supabase Function Hook to trigger the function when a new row is inserted into `partner_contacts`
   ![function hook setup 1](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-1.png)
   ![function hook setup 2](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-2.png)
4. Within Vercel project settings, ensure Framework Preset is set to `Next.js` and Root Directory is set to `app`.
5. Insert partners into the `partners` table.
6. Celebrate together 🎉


## Resources
- [TGIF: Postgres Full Text Search & sending emails from Edge Functions](https://youtu.be/ZhlXnWRts04)
- [Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions)

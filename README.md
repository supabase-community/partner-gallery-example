# Supabase's Partner Gallery Example

An example Next.js website that shows Postgres full text search, next-image with Supabase storage, and sending an email based on an insert trigger with Supabase Functions.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsupabase-community%2Fpartner-gallery-example&env=SUPABASE_HOSTNAME,NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY)

# Usage

1. Create a new Supabase project, or use an existing one
2. Run the `schema.sql` file in the Supabase dashboard to create the relevant tables
3. Update the environment variables (either in Vercel or locally) with Supabase URL and Anon Key
4. Deploy Supabase function for contract form notification:

```
supabase link --project-ref your-project-ref
supabase functions deploy contact-notification
supabase secrets set SMTP_HOSTNAME="your.hostname.com" SMTP_PORT="2587" SMTP_USERNAME="your_username" SMTP_PASSWORD="your_password" SMTP_FROM="no-reply@example.com" SMTP_TO="you@example.com" FUNCTION_SECRET="your-random-secret"
```

Note: `SMTP_PORT` must be a port other than `25`, `465`, and `587` as Deno Deploy does not support outgoing connections to ports. AWS SES (port 2587) is recommended.

5. Setup a Supabase Function Hook to trigger the function when a new row is inserted into `partner_contacts`
   ![function hook setup 1](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-1.png)
   ![function hook setup 2](https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/misc/partner-gallery-example-2.png)
6. Insert partners into `partners` table.first-letter
7. Profit 🎉

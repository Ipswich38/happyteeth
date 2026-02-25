
# Database Schema Update Instructions

Since you already have the `submissions` table created, you need to add the email field to support the new appointment functionality.

## Quick Update (Add Email Column)

Go to your Supabase dashboard → SQL Editor and run this command:

```sql
-- Add email column to existing table
ALTER TABLE public.submissions
ADD COLUMN IF NOT EXISTS email TEXT;

-- Since email is now required for new appointments, let's set a default for existing records
UPDATE public.submissions
SET email = COALESCE(email, 'no-email@happyteeth.com')
WHERE email IS NULL OR email = '';

-- Now make email required for future records (optional - can be done later)
-- ALTER TABLE public.submissions
-- ALTER COLUMN email SET NOT NULL;

-- Add index for email searches
CREATE INDEX IF NOT EXISTS idx_submissions_email ON public.submissions(email);
```

## Alternative: Complete Table Recreation (If Preferred)

If you want to start fresh with the updated schema, run this instead:

```sql
-- Drop existing table (WARNING: This deletes all current data!)
DROP TABLE IF EXISTS public.submissions CASCADE;

-- Create new table with email field
CREATE TABLE public.submissions (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('appointment', 'contact')),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    cellphone TEXT,
    message TEXT,
    service TEXT,
    date TEXT,
    time TEXT,
    "customTime" TEXT,
    "isCustomTime" BOOLEAN DEFAULT FALSE,
    "appointmentDateTime" TEXT,
    timestamp TEXT NOT NULL,
    read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_submissions_type ON public.submissions(type);
CREATE INDEX idx_submissions_read ON public.submissions(read);
CREATE INDEX idx_submissions_created_at ON public.submissions(created_at);
CREATE INDEX idx_submissions_timestamp ON public.submissions(timestamp);
CREATE INDEX idx_submissions_email ON public.submissions(email);

-- Enable RLS
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Allow all operations" ON public.submissions
    FOR ALL USING (true);
```

## Recommended Approach

**Use Option 1** (Add Column) if you have existing appointment data you want to keep.
**Use Option 2** (Recreate) if you're okay starting fresh.

After running the SQL command, test by submitting a new appointment through your website!
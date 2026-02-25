# Supabase Setup Instructions

Since the automated script couldn't create the table, please follow these manual steps:

## Step 1: Access Supabase Dashboard
1. Go to https://supabase.com/dashboard
2. Navigate to your project: `yevbblbxvvyjnpsntneq`
3. Go to the "SQL Editor" section

## Step 2: Create the submissions table
Copy and paste the following SQL command in the SQL Editor and run it:

```sql
-- Create the submissions table for appointments and contacts
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

-- Create indexes for better performance
CREATE INDEX idx_submissions_type ON public.submissions(type);
CREATE INDEX idx_submissions_read ON public.submissions(read);
CREATE INDEX idx_submissions_created_at ON public.submissions(created_at);
CREATE INDEX idx_submissions_timestamp ON public.submissions(timestamp);

-- Enable Row Level Security
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (since this is for internal use)
CREATE POLICY "Allow all operations" ON public.submissions
    FOR ALL
    USING (true);

-- Insert a test record to verify everything works
INSERT INTO public.submissions (
    id, type, name, email, cellphone, service, date, time, "customTime",
    "isCustomTime", "appointmentDateTime", timestamp, read
) VALUES (
    'test-setup-' || extract(epoch from now()),
    'appointment',
    'Test Setup User',
    'test@example.com',
    '09123456789',
    'General Consultation',
    '2024-02-01',
    '10:00',
    '',
    false,
    '2024-02-01 10:00',
    now()::text,
    false
);

-- Verify the table was created and data inserted
SELECT * FROM public.submissions;

-- Clean up the test record (optional)
DELETE FROM public.submissions WHERE name = 'Test Setup User';
```

## Step 3: Verify the setup
After running the SQL commands above, you should see:
1. The `submissions` table created
2. A test record inserted and then deleted
3. The table structure should be ready for appointments

## Alternative: If you prefer to create the table through code
You can also create a simple test appointment through the website once everything is deployed. The first appointment submission will automatically create the table structure if Supabase is configured with the right permissions.

## Note
Make sure you're using the correct Supabase project (yevbblbxvvyjnpsntneq) and that your service role key has the necessary permissions to create tables and policies.
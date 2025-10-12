-- Create submissions table
CREATE TABLE submissions (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact', 'appointment')),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  cellphone TEXT,
  message TEXT,
  service TEXT,
  date TEXT,
  timestamp TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_submissions_type ON submissions(type);
CREATE INDEX idx_submissions_read ON submissions(read);
CREATE INDEX idx_submissions_created_at ON submissions(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for authenticated users
CREATE POLICY "Allow all operations for authenticated users" ON submissions
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create policy to allow all operations for anon users (for API access)
CREATE POLICY "Allow all operations for anon users" ON submissions
FOR ALL
TO anon
USING (true)
WITH CHECK (true);
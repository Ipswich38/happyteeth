// This script creates the appointments table in the new Supabase database
// Run this script after deployment to set up the table structure

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yevbblbxvvyjnpsntneq.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldmJibGJ4dnZ5am5wc250bmVxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk4ODA3OSwiZXhwIjoyMDg3NTY0MDc5fQ.TYzn50zKrCSWSM88CIJbpfANIVQpRykQT3Gs6z1UiZQ';

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function createAppointmentsTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL CHECK (type IN ('appointment', 'contact')),
      name TEXT NOT NULL,
      email TEXT,
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
    CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(type);
    CREATE INDEX IF NOT EXISTS idx_submissions_read ON submissions(read);
    CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at);
    CREATE INDEX IF NOT EXISTS idx_submissions_timestamp ON submissions(timestamp);

    -- Enable Row Level Security (optional, for additional security)
    ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

    -- Create policy to allow all operations (since this is for internal use)
    CREATE POLICY IF NOT EXISTS "Allow all operations" ON submissions
      FOR ALL USING (true);
  `;

  try {
    const { error } = await supabase.rpc('exec_sql', { sql: createTableQuery });

    if (error) {
      console.error('Error creating table:', error);
      // Try alternative method if RPC doesn't work
      console.log('Trying alternative method...');

      // Create table using REST API
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${serviceRoleKey}`,
          'apikey': serviceRoleKey
        },
        body: JSON.stringify({ sql: createTableQuery })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Table created successfully using REST API');
    } else {
      console.log('Table created successfully');
    }

    // Test table by inserting a test record
    const testRecord = {
      id: 'test-' + Date.now(),
      type: 'appointment',
      name: 'Test User',
      cellphone: '09123456789',
      service: 'General Consultation',
      date: '2024-02-01',
      time: '10:00',
      customTime: '',
      isCustomTime: false,
      appointmentDateTime: '2024-02-01 10:00',
      timestamp: new Date().toISOString(),
      read: false
    };

    const { data, error: insertError } = await supabase
      .from('submissions')
      .insert([testRecord]);

    if (insertError) {
      console.error('Error inserting test record:', insertError);
    } else {
      console.log('Test record inserted successfully');

      // Clean up test record
      await supabase
        .from('submissions')
        .delete()
        .eq('id', testRecord.id);

      console.log('Test record cleaned up');
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

// Only run if this is the main module (not imported)
if (require.main === module) {
  createAppointmentsTable()
    .then(() => {
      console.log('Setup completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Setup failed:', error);
      process.exit(1);
    });
}

module.exports = { createAppointmentsTable };
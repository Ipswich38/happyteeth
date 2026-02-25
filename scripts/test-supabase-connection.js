const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yevbblbxvvyjnpsntneq.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldmJibGJ4dnZ5am5wc250bmVxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTk4ODA3OSwiZXhwIjoyMDg3NTY0MDc5fQ.TYzn50zKrCSWSM88CIJbpfANIVQpRykQT3Gs6z1UiZQ';

async function testConnection() {
  const supabase = createClient(supabaseUrl, serviceRoleKey);

  console.log('Testing Supabase connection...');

  // First let's try to insert a test record - this should work and create the table
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

  try {
    const { data, error } = await supabase
      .from('submissions')
      .insert([testRecord]);

    if (error) {
      console.error('Insert error:', error);
      console.log('This is expected if the table doesn\'t exist yet.');

      // Let's check what tables exist
      const { data: tables, error: tablesError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .eq('table_schema', 'public');

      if (tablesError) {
        console.error('Error fetching tables:', tablesError);
      } else {
        console.log('Existing tables:', tables.map(t => t.table_name));
      }
    } else {
      console.log('Test record inserted successfully:', data);

      // Clean up the test record
      const { error: deleteError } = await supabase
        .from('submissions')
        .delete()
        .eq('id', testRecord.id);

      if (deleteError) {
        console.error('Error cleaning up test record:', deleteError);
      } else {
        console.log('Test record cleaned up successfully');
      }
    }

  } catch (err) {
    console.error('Connection test failed:', err);
  }
}

testConnection();
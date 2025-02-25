import { createClient } from '@supabase/supabase-js';

// Reemplaza con tus credenciales de Supabase
const supabaseUrl = 'https://nwxdshisfyenkylgqxgz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGRzaGlzZnllbmt5bGdxeGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNTQzMDgsImV4cCI6MjA1NDYzMDMwOH0.QoIiNo5pFA1_MVfE2ugLgyz4HeET-WhA0C_sNOkWv9g';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función para obtener datos de la tabla "jugadores"
async function fetchData() {
  const { data, error } = await supabase.from('jugadores').select('*');

  if (error) {
    console.error('Error al obtener datos:', error);
    return;
  }

  console.log('Datos obtenidos:', data);
}

fetchData();

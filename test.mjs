import { supabase } from './supabaseClient.js';

async function testConnection() {
  let { data, error } = await supabase.from('Categoria_2014_2015_2016').select('*');
  
  if (error) {
    console.error('Error al obtener datos:', error);
  } else {
    console.log('Datos obtenidos:', data);
  }
}

testConnection();

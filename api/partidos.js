export default async function handler(req, res) {
    const API_KEY = process.env.FOOTBALL_API_KEY; // Guarda tu API key en las variables de entorno

    try {
        const response = await fetch('https://api.football-data.org/v4/matches', {
            headers: {
                'X-Auth-Token': API_KEY
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error al obtener datos' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor' });
    }
}

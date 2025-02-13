<input type="file" id="fileInput" accept=".csv">
<input type="text" id="searchInput" placeholder="Buscar jugador...">
<button onclick="buscarJugador()">Buscar</button>

<script>
    let jugadores = [];

    document.getElementById("fileInput").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            procesarCSV(e.target.result);
        };
        reader.readAsText(file);
    });

    function procesarCSV(texto) {
        const lineas = texto.split("\n");
        const headers = lineas[0].split("\t"); // Usa "\t" si es separado por tabulaciones

        jugadores = lineas.slice(1).map(linea => {
            const valores = linea.split("\t");
            let jugador = {};
            headers.forEach((header, index) => {
                jugador[header.trim()] = valores[index] ? valores[index].trim() : "";
            });
            return jugador;
        });

        console.log("Jugadores cargados:", jugadores);
    }

    function buscarJugador() {
        const query = document.getElementById("searchInput").value.trim().toLowerCase();
        if (query === "") {
            alert("Por favor, ingresa un nombre.");
            return;
        }

        const jugadorEncontrado = jugadores.find(jugador =>
            jugador["Nombres"].toLowerCase().includes(query) ||
            jugador["Apellidos"].toLowerCase().includes(query)
        );

        if (!jugadorEncontrado) {
            alert("No se encontraron jugadores con ese nombre.");
            return;
        }

        // Redirigir a la página de la ficha técnica con los datos en la URL
        const params = new URLSearchParams();
        for (let key in jugadorEncontrado) {
            params.append(key, jugadorEncontrado[key]);
        }
        window.location.href = `ficha.html?${params.toString()}`;
    }
</script>

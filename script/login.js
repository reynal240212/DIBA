document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Inicializa Supabase
    const supabaseUrl = "https://nwxdshisfyenkylgqxgz.supabase.co";
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGRzaGlzZnllbmt5bGdxeGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNTQzMDgsImV4cCI6MjA1NDYzMDMwOH0.QoIiNo5pFA1_MVfE2ugLgyz4HeET-WhA0C_sNOkWv9g";
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const usuario = document.querySelector("input[type='text']").value.trim();
        const contraseña = document.querySelector("input[type='password']").value.trim();

        if (usuario === "" || contraseña === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Autenticación con Supabase
            const { data, error } = await supabase.auth.signInWithPassword({
                email: usuario,
                password: contraseña
            });

            if (error) {
                alert("Error en el inicio de sesión: " + error.message);
            } else {
                alert("Inicio de sesión exitoso.");
                window.location.href = "index.html"; // Redirige al usuario
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Hubo un problema al iniciar sesión.");
        }
    });
});


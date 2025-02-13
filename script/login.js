document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form"); // Usa un ID específico

    // Inicializa Supabase
    const supabaseUrl = "https://nwxdshisfyenkylgqxgz.supabase.co";
    const supabase = supabase.createClient(supabaseUrl, "TU_SUPABASE_ANON_KEY");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        try {
            // Autenticación con Supabase
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                alert("Error en el inicio de sesión: " + error.message);
            } else {
                alert("Inicio de sesión exitoso.");
                window.location.href = "index.html"; // Redirige a la página principal
            }
        } catch (err) {
            console.error("Error:", err);
            alert("Hubo un problema al iniciar sesión.");
        }
    });
});

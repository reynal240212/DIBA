document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario

        const usuario = document.querySelector("input[type='text']").value.trim();
        const contraseña = document.querySelector("input[type='password']").value.trim();

        if (usuario === "" || contraseña === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simulación de login (puedes reemplazarlo con una autenticación real en el futuro)
        if (usuario === "admin" && contraseña === "1234") {
            alert("Inicio de sesión exitoso.");
            window.location.href = "index.html"; // Redirige a la página principal (ajústala según tu estructura)
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});

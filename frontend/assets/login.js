document.getElementById("form-login").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const mensajeError = document.getElementById("mensaje-error");
  mensajeError.style.display = "none";

  if (!email || !contrasena) {
    mensajeError.textContent = "⚠️ Debes completar todos los campos.";
    mensajeError.style.display = "block";
    return;
  }

  const datosLogin = { email, contrasena };

  fetch("http://localhost:8080/api/clientes/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datosLogin)
  })
    .then(res => {
      if (!res.ok) throw new Error("Credenciales inválidas");
      return res.json();
    })
    .then(usuario => {
      // Guardar sesión
      localStorage.setItem("usuario", JSON.stringify(usuario));

      // Redirigir
      alert("✅ Bienvenido/a, " + usuario.nombre);
      window.location.href = "index.html";
    })
    .catch(err => {
      console.error("Error de login:", err);
      mensajeError.textContent = "❌ Correo o contraseña incorrectos.";
      mensajeError.style.display = "block";
    });
});
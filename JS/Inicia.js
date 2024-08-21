let loginAttempts = 0;

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username === '' || email === '' || password === '') {
        document.getElementById('register-error').style.display = 'block';
    } else {
        document.getElementById('register-error').style.display = 'none';
        alert('Registro exitoso');
        showLoginForm();
    }
}

function showLoginForm() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}
function showRegisterForm() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username !== 'usuario' || password !== 'contraseña') {  // Reemplaza con la validación real
        loginAttempts++;
        document.getElementById('login-error').style.display = 'block';

        if (loginAttempts >= 3) {
            alert('Has fallado demasiadas veces. La página se cerrará.');
            window.close(); // Cierra la pestaña del navegador
        }
    } else {
        document.getElementById('login-error').style.display = 'none';
        alert('Inicio de sesión exitoso');
        // Redirecciona a la página de inicio
    }
}
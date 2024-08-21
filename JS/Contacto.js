function submitContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const message = document.getElementById('contact-message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
        document.getElementById('contact-error').style.display = 'block';
    } else {
        document.getElementById('contact-error').style.display = 'none';
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar el código para enviar los datos a un servidor o manejarlos de alguna manera
    }
}
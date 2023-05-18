function showAlert() { 
    alert('¡Hola, esta es una alerta desde JavaScript!');
}

const form = document.getElementById("formEmail");

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const input = document.getElementById("email")
    const inputValue = input.value

    if (!validateEmail(inputValue)) {
        alert('Ingrese un correo electrónico válido')
        } else {
            alert('Correo electrónico enviado corretamente')
        }
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
})


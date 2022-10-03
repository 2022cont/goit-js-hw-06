const formFt = document.querySelector('form.login-form');
formFt.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    if (email.value == "" || password.value == "") {
        return alert("Please fill in all the fields!");
    };

    const dataForm = {
        email: email.value,
        password: password.value
    }
    event.currentTarget.reset();
    console.table(dataForm);
}


    
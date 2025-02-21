//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const user_first_name = document.querySelector('#user_first_name')
const user_second_name = document.querySelector('#user_second_name')
const user_last_name = document.querySelector('#user_last_name')
const user_age = document.querySelector('#user_age')
const btn_log_in = document.querySelector("#log_in");
const btn_check_html = document.createElement('button');
const title = document.querySelector('h1')
const html_text = document.querySelector('#html-text')


btn_log_in.onclick = function(){
    title.textContent = `Bienvenido/a ${user_first_name.value.toUpperCase().trim()}!`
    document.querySelector('form').style.display = 'none'
    html_text.textContent = `
        Nombres: ${user_first_name.value.toUpperCase().trim()} ${user_second_name.value.toUpperCase().trim()},
        Apellido: ${user_last_name.value.toUpperCase().trim()},
        Edad: ${user_age.value} años.`
    return false;
}


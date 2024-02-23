//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector("#calculate_total").onclick = function(e){
    e.preventDefault()
    const $hours = Number(document.querySelector('#hours').value)
    const $minutes = Number(document.querySelector('#minutes').value)
    const $seconds = Number(document.querySelector('#seconds').value)
    const $total_time = document.querySelector('#total_time')
    
    $total_time.textContent = `El tiempo total del video es de ${$hours} hora/s, ${$minutes} minuto/s y ${$seconds} segundo/s.`

    document.querySelector('#hours').value = '';
    document.querySelector('#minutes').value = '';
    document.querySelector('#seconds').value = '';

    return $total_time;
}
let saludo = document.getElementById('saludo')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

btn.addEventListener('click', function(){
    let nombre = input.value;
    if (nombre != ''){
    saludo.innerHTML = '¡Hola '+nombre+', vamos a empezar con las tareas del día!'}})
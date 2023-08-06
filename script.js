let saludo = document.getElementById('saludo')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

btn.addEventListener('click', function(){
    let nombre = input.value;
    saludo.innerHTML = 'Hola '+nombre+', vamos a empezar nuestro día!'})
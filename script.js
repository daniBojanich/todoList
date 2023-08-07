let saludo = document.getElementById('saludo')
let btn = document.getElementById('btn')
let input = document.getElementById('input')
// chorizo de variables
let check1 = document.getElementById('check1')
let task1 = document.getElementById('task1').innerHTML
let check2 = document.getElementById('check2')
let task2 = document.getElementById('task2').innerHTML
let check3 = document.getElementById('check3')
let task3 = document.getElementById('task3').innerHTML
let check4 = document.getElementById('check4')
let task4 = document.getElementById('task4').innerHTML
let check5 = document.getElementById('check5')
let task5 = document.getElementById('task5').innerHTML
let check6 = document.getElementById('check6')
let task6 = document.getElementById('task6').innerHTML
let check7 = document.getElementById('check7')
let task7 = document.getElementById('task7').innerHTML
let check8 = document.getElementById('check8')
let task8 = document.getElementById('task8').innerHTML
let check9 = document.getElementById('check9')
let task9 = document.getElementById('task9').innerHTML
let check10 = document.getElementById('check10')
let task10 = document.getElementById('task10').innerHTML





btn.addEventListener('click', function(){
    let nombre = input.value;
    if (nombre != ''){
    saludo.innerHTML = '¡Hola '+nombre+', vamos a empezar con las tareas del día!'}})


    check1.addEventListener('click', function() {
        if(check1.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task1.toLowerCase() + '!')
    }})

    check2.addEventListener('click', function() {
        if(check2.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task2.toLowerCase() + '!')
    }})

    check3.addEventListener('click', function() {
        if(check3.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task3.toLowerCase() + '!')
    }})

    check4.addEventListener('click', function() {
        if(check4.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task4.toLowerCase() + '!')
    }})

    check5.addEventListener('click', function() {
        if(check5.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task5.toLowerCase() + '!')
    }})
    check6.addEventListener('click', function() {
        if(check6.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task6.toLowerCase() + '!')
    }})

    check7.addEventListener('click', function() {
        if(check7.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task7.toLowerCase() + '!')
    }})

    check8.addEventListener('click', function() {
        if(check8.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task8.toLowerCase() + '!')
    }})
    check9.addEventListener('click', function() {
        if(check9.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task9.toLowerCase() + '!')
    }})
    check10.addEventListener('click', function() {
        if(check10.checked) {
        alert( 'Muy bien ' + input.value + ' ya terminaste de '+ task10.toLowerCase() + '!')
    }})


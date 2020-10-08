let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0
minValue = (minValue < -999) ? -999 : minValue
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100
maxValue = (maxValue > 999) ? 999 : maxValue
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`)
let answerNumber  = Math.floor((minValue + maxValue) / 2)
let orderNumber = 1
let gameRun = true
let victory = [`Я всегда угадываю\n\u{1F60E}`, `Какой я молодец!\n\u{1F60A}`, `Это было не трудно!\n\u{1F60E}`]
let answerPhrase = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}` , `Ну так же нельзя!\n\u{1F624}`]
let guess = [`Вы загадали число` , `Должно быть это` , `A как насчет`]


const orderNumberField = document.getElementById('orderNumberField')
const answerField = document.getElementById('answerField')

orderNumberField.innerText = orderNumber
answerField.innerText = `Вы загадали число ${answerNumber }?`

document.getElementById('btnRetry').addEventListener('click', function () {
    window.location.reload()
    minValue = 0
    maxValue = 100
    orderNumber = 0
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            var a = answerPhrase[ Math.floor( Math.random() * answerPhrase.length) ]
            answerField.innerText = a
            gameRun = false
        } else {
            minValue = answerNumber  + 1
            answerNumber = Math.floor((minValue + maxValue) / 2)
            orderNumber++
            orderNumberField.innerText = orderNumber
            var g = guess[ Math.floor( Math.random() * answerPhrase.length) ]
            answerField.innerText = `${g} ${answerNumber}?`
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            var a = answerPhrase[ Math.floor( Math.random() * answerPhrase.length) ]
            answerField.innerText = a
            gameRun = false
        } else {
            maxValue = answerNumber  - 1
            answerNumber  = Math.floor((minValue + maxValue) / 2)
            orderNumber++
            orderNumberField.innerText = orderNumber
            var g = guess[ Math.floor( Math.random() * answerPhrase.length) ]
            answerField.innerText = `${g} ${answerNumber }?`
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        var v = victory[ Math.floor( Math.random() * victory.length) ]
        answerField.innerText = v
        gameRun = false
    }
})


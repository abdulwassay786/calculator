function getValue(e) {
    a = document.getElementById('result')
    a.value += e
}

function calculate() {
    a = document.getElementById('result')
    var final = eval(a.value)
    a.value = final
}

function clearValue() {
    var a = document.getElementById('result')
    a.value = ''
}
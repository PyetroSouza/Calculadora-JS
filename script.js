var numero = document.getSelection('7,8,9,4,5,6,1,2,3,0');
var operador = document.getSelection('+,-,x,÷,.');
function adicionarNumero(numero) {
    const display = document.getElementById('display');
    display.value += numero;
    display.innerHTML = display.innerHTML + numero;
}
function adicionarOperacao(operacao) {
    const display = document.getElementById('display');
    display.value += operacao;
    display.innerHTML = `${display.innerHTML} ${operacao} `;
}
function calcularResultado() {
    const display = document.getElementById('display');
}
function limparDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    display.innerHTML = '';
}
function apagarUltimo() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    display.innerHTML = display.innerHTML.slice(0, -1);
}

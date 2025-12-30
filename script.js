const display = document.getElementById('display'); //só usar display dentro das funções para evitar repetição
function adicionarNumero(numero) {
    display.value += numero;
   // display.innerHTML = display.innerHTML + numero;
}
function adicionarOperador(operador) {
    const ultimoChar = display.value.slice(-1); // Pega o último caractere do display
    if ('+-x÷/'.includes(ultimoChar)) {return

    } else {
        display.value += (`${operador}`);
}
}
function calcularResultado() {
     let expressao = display.value;
     if (expressao === '') {
        return; // Evita calcular se a expressão estiver vazia
    }
    // Substitui os operadores para que possam ser avaliados corretamente
     expressao = expressao.replace(/x/g, '*');
        expressao = expressao.replace(/÷/g, '/');
        // Avalia a expressão
    try {
        const resultado = eval(expressao);
        display.value = resultado;
        display.innerHTML = resultado;
    } catch (error) {
        display.value = 'Erro';
        display.innerHTML = 'Erro';
    }
    
}
function limparDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}
function adicionarPonto(ponto) {
    const valor = display.value;

    // Verifica se já existe um ponto na parte atual do número
    const partes = display.value.split(/[\+\-\x\÷]/);
    const ultimoNumero = partes[partes.length - 1];
    // Se já houver um ponto no último número, não adiciona outro
    if (ultimoNumero.includes('.')) 
        return;
        // Se o display estiver vazio ou o último caractere for um operador, não adiciona o ponto
        if (valor === '' || '+-x÷/'.includes(valor.slice(-1))) {
            return;
        }
    display.value += ponto;
}

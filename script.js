const display = document.getElementById
('display'); //só usar display dentro das funções para evitar repetição
let emErro = false;
function mostrarErro() {
    display.value = 'Erro';
    emErro = true;
}
function adicionarNumero(numero) {
        if (emErro) {
        display.value = numero;
        emErro = false;
        return;
    }
    display.value += numero;
   // display.innerHTML = display.innerHTML + numero;
}
function adicionarOperador(operador) {
     if (emErro) return;
    const ultimoChar = display.value.slice(-1); // Pega o último caractere do display
    if ('+-x÷/'.includes(ultimoChar)) {return

    } else {
        display.value += (`${operador}`);
}
}
function adicionarPonto(ponto) {
        if (emErro) {
        display.value = '0.';
        emErro = false;
        return;
    }
    const valor = display.value;

    // Verifica se já existe um ponto na parte atual do número
    const partes = display.value.split(/[+\-\-x\÷]/);
    const ultimoNumero = partes[partes.length - 1];
    // Se já houver um ponto no último número, não adiciona outro
    if (ultimoNumero.includes('.')) 
        return;
        // Se o display estiver vazio ou o último caractere for um operador, não adiciona o ponto
        if (valor === '' || '+-x÷/'.includes(valor.slice(-1))) {
            display.value += '0.';
            return;
        }
    display.value += ponto;
}
function calcularResultado() {
     let expressao = display.value;
     if (expressao === ''  || /[\+\-x÷.]$/.test(expressao)) {
        mostrarErro();
        return;
         // Evita calcular se a expressão estiver vazia
    }
    // Substitui os operadores para que possam ser avaliados corretamente
     expressao = expressao.replace(/x/g, '*');
        expressao = expressao.replace(/÷/g, '/');
        // Avalia a expressão
    try {
        const resultado = eval(expressao);
        display.value = resultado;
        emErro = false;
    } catch (error) {
        mostrarErro();
    }
    
}
function limparDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}
function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}


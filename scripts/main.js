//Aula 19 - Exercício 01

let nome = 'Rodrigo Santana'
let num1 = 12
let num2 = 4
let soma = num1 + num2
let mult = num1 * num2

alert (soma)
console.log(nome)
console.log(mult)


//Aula 19 - Exercício 02

function subtração(num1, num2) {
    if (num1 < num2) {
        return console.log('Não foi possível subtrair')
    } else {
        return console.log(num1 - num2)
    }


}

subtração(num1, num2)

function divisão(num1, num2) {
    if (num2 < 0 ) {
        return console.log('Não foi possível dividir')
    } else {
        return console.log(num1 / num2)
    }
}

divisão(num1, num2)


//Aula 19 - Exercício 03

const fruta = {
    nome: 'Abacate',
    cor: 'Verde',
    peso: 800,
    tipo:'fruta'
}

console.log(fruta)
console.log(fruta.tipo)


//Aula 19 - Exercício 04
let alimento1 = {
    nome: 'Maçã',
    cor: 'Vermelha',
    peso: 150, 
    tipo: 'fruta'
};

let alimento2 = {
    nome: 'Brócolis',
    cor: 'Verde',
    peso: 200,
    tipo: 'verdura'
};

let alimento3 = {
    nome: 'Cenoura',
    cor: 'Laranja',
    peso: 100,
    tipo: 'legume'
};
   
let alimento4 = {
    nome: 'Banana',
    cor: 'Amarela',
    peso: 120,
    tipo: 'fruta'
};
   
let alimento5 = {
    nome: 'Couve',
    cor: 'Verde',
    peso: 50, 
    tipo: 'verdura'
}; 

let alimentos = [alimento1, alimento2, alimento3, alimento4, alimento5];

console.log(alimentos);
console.log(alimentos[1].tipo)
  

//Aula 19 - Exercício 05

alimentos.forEach((item) => {

    if(item.tipo === 'verdura') {
        console.log('Você possui uma verdura')
    } else {
        console.log(item.tipo)
    }
})

//Aula 20 - Exercício 01

    var nomes = [];
    var idades = [];

    function adicionar() {
      var nomeInput = document.getElementById('nome');
      var idadeInput = document.getElementById('idade');

      var nome = nomeInput.value;
      var idade = parseInt(idadeInput.value);

      if (nome && idade) {
        nomes.push(nome);
        idades.push(idade);

        nomeInput.value = '';
        idadeInput.value = '';

        alert('Nome e idade adicionados com sucesso!');
      } else {
        alert('Por favor, preencha tanto o nome quanto a idade.');
      }
    }

    function visualizar() {
      var listaNomesIdades = document.getElementById('listaNomesIdades');
      listaNomesIdades.innerHTML = '';

      for (var i = 0; i < nomes.length; i++) {
        var li = document.createElement('li');
        li.textContent = 'Nome: ' + nomes[i] + ', Idade: ' + idades[i];
        listaNomesIdades.appendChild(li);
      }

      console.log(nomes);
      console.log(idades);
    }

//Aula 20 - Exercício 02

function calcular(operacao) {
      var numero1 = parseFloat(document.getElementById('numero1').value);
      var numero2 = parseFloat(document.getElementById('numero2').value);
      var resultadoSpan = document.getElementById('resultado');

      if (isNaN(numero1) || isNaN(numero2)) {
        resultadoSpan.textContent = 'Por favor, insira números válidos.';
      } else {
        switch (operacao) {
          case '+':
            resultadoSpan.textContent = numero1 + numero2;
            break;
          case '-':
            resultadoSpan.textContent = numero1 - numero2;
            break;
          case '*':
            resultadoSpan.textContent = numero1 * numero2;
            break;
          case '/':
            if (numero2 === 0) {
              resultadoSpan.textContent = 'Não é possível dividir por zero.';
            } else {
              resultadoSpan.textContent = numero1 / numero2;
            }
            break;
          default:
            resultadoSpan.textContent = 'Operação inválida.';
        }
      }
    }



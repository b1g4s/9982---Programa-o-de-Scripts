//exercicio 8
function ernesto() {
  let msg = "";
  let n = document.getElementById('nome').value;

  if (n == "Ernesto" || n == "ernesto"){
    msg = "Parabéns. Chamas-te Ernesto";
  }
  else {
    msg = "Que pena!!! Nome errado!";
  }

  document.getElementById('res').value = msg;
}

//exercicio 9
function comprar() {
  let saldo = document.getElementById('saldo').value;
  let preco = document.getElementById('preco').value;
  let resul = "";

  if (saldo-preco>0) {
    resul = "Sim! Vai lá antes que acabe o stock!";
  }
  else {
    resul = "Não, vai mas é trabalhar!"
  }

  document.getElementById('resul').innerHTML = resul;
}

//exercicio 10
function displayDate() {
  document.getElementById('data').innerHTML = Date();
}

//exercicio 11
function strings() {
  let nome = document.getElementById('nome').value;
  let n = nome.length;
  let m = nome.toUpperCase();
  let s = nome.slice(3);

  document.getElementById('tamanho').innerHTML = n;
  document.getElementById('maiusculas').innerHTML = m;
  document.getElementById('slice').innerHTML = s;

}

//exercicio 12
function findg() {
  let ano = parseInt(document.getElementById('ano').value);
  let res = "";

  if (ano <=  1900){
    res = "The Lost Genariton!";
  }
  else if (ano <=  1924) {
    res = "The greatest generation!";
  }
  else if (ano <=  1945) {
    res = "The Silent generation!";
  }
  else if (ano <=  1964) {
    res = "Baby Boomer generation!";
  }
  else if (ano <=  1980) {
    res = "Generation X!";
  }
  else if (ano <=  1996) {
    res = "Generation Y - Millenials!";
  }
  else if (ano <=  2012) {
    res = "Generation z!";
  }
  else {
    res = "Generation Alpha!";
  }
  document.getElementById('ger').innerHTML = res;
}

//exercicio 13
function findgv2() {
    let year = parseInt(document.getElementById('year').value);
    let resultado = "";

    switch (true) {
        case (year <= 1900):
            resultado = "The lost generation!";
            break;
        case (year <= 1924):
            resultado = "The greatest generation";
            break;
        case (year <= 1945):
            resultado = "The silent generation";
            break;
        case (year <= 1964):
            resultado = "Baby boomer generation";
            break;
        case (year <= 1980):
            resultado = "Generation X";
            break;
        case (year <= 1996):
            resultado = "Generation Y - Millenials";
            break;
        case (year <= 2012):
            resultado = "Generation Z - High Gen";
            break;
        default:
            resultado = "Generation Alpha";
            break;
    }
    document.getElementById('gera').innerHTML = resultado;
}

//exercicio 13
function diaSemana() {
  let dia = parseInt(document.getElementById('dia').value);
  let semana = "";

  switch (dia){
      case 1:
          semana = "Domingo";
          break;
      case 2:
          semana = "Segunda-feira";
          break;
      case 3:
          semana = "Terça-feira";
          break;
      case 4:
          semana = "Quarta-feira";
          break;
      case 5:
          semana = "Quinta-feira";
          break;
      case 6:
          semana = "Sexta-feira";
          break;
      case 7:
          semana = "Sábado";
          break;
      default:
          semana = "Erro!";
          break;
  }
  document.getElementById('diasemana').innerHTML = semana;
}

//exercicio 14
function quadrado() {
  let i = 1;
  let str ="";

  for (i = 1; i <= 10; i++) {
    let quad = i*i;
    if (i < 10){
      str += quad + ", ";
    }
    else {
      str += quad;
    }
    document.getElementById('square').innerHTML = str;
  }
}

//exercicio 15 impares
function impares() {
  let i = 1;
  let str = "";

  for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        if (i < 9) {
          str += i + ", ";
        }
        else {
          str += i;
        }
    }
  }
  document.getElementById('impares').innerHTML = str;
}

//exercicio 15 pares
function pares() {
  let i = 1;
  let str = "";

  for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        if (i < 10) {
          str += i + ", ";
        }
        else {
          str += i;
        }
    }
  }
  document.getElementById('impares').innerHTML = str;
}

//Exercicio 16
function split() {
  let n = document.getElementById('nome').value;
  let t = n.length
  let i = 0;
  let str = "";

  for (i=0; i<t; i++) {
    if (i < t) {
      str += n.substr(i,1) + " ";
      str = str.toUpperCase();
    }
    else {
      str += n.substr(i,1);
      str = str.toLocaleUpperCase();
    }
    document.getElementById('caractere').innerHTML = str;
  }
}

//exercicio 16 While
function dias() {
  let text = "";
  let i = 1;
  let ss = "";

  while (i<8) {
    switch (i) {
      case 1: 
        ss = "Domingo";
        break;
      case 2: 
        ss = "Segunda-feira";
        break;
      case 3: 
        ss = "Terça-feira";
        break;
      case 4: 
        ss = "Quarta-feira";
        break;
      case 5: 
        ss = "Quinta-feira";
        break;
      case 6:
        ss = "Sexta-feira";
        break;
      default: 
        ss = "Sábado";
        break; 
    }

    text = text + '<br>' + 'Dia ' + i + ' - ' + ss;
    i++;
  }
  document.getElementById('output').innerHTML = text;
}

//exercicio 17
function amigo() {
  let txt = "É para um amigo meu!";
  let frase = "";
  let i = 1;
  do {
    frase += '<br>' + txt;
    i++;
  }
  while (i <= 20);
  document.getElementById('output2').innerHTML = frase;
}

//exercicio 18
function primos() {
  let qtd = parseInt(document.getElementById('qtd').value);
  let contador = 0;
  let num = 1;
  let prim = "";

  while (contador < qtd) {
    let p = true;
    let d = Math.floor(num/2);
    while (d > 1) {
      
      if (num % d == 0){
        p = false;
      }
      d=d-1;
    }
    if (p==true) {
      contador++;
      prim = prim + '<br>' + num;
    }
    num++;
  }
  document.getElementById('output3').innerHTML = prim;
}

//exercicio 19 arrays
function carros() {
  let c1 = document.getElementById('carro1').value;
  let c2 = document.getElementById('carro2').value;
  let c3 = document.getElementById('carro3').value;

  carrosImp(c1, c2, c3);
}

function carrosImp(a, b, c){
  let str = "";
  
  str = a + "<br>" + b + "<br>" + c;
  document.getElementById('output4').innerHTML = str;
} 

function carros2(){
  let fav = [];
  fav[0] = document.getElementById('carro4').value;
  fav[1] = document.getElementById('carro5').value;
  fav[2] = document.getElementById('carro6').value;
  carrosImp2(fav);
}

function carrosImp2(a){
  let str="";
  for(let i=0;i<3;i++){
    str = str + a[i]+ "<br>";
  }
  document.getElementById('output5').innerHTML = str;
}

let fav2 = [];
function carros3(){
  fav2[0] = document.getElementById('carro7').value;
  fav2[1] = document.getElementById('carro8').value;
  fav2[2] = document.getElementById('carro9').value;
} 

function carrosImp3(a) {
  let str = "";
  for (let i = 0; i < 3; i++) {
    str += a[i] + "<br>"; 
  }
  document.getElementById('output6').innerHTML = str;
}

let fav3 = [];
function carros4(){
  fav3[fav3.length] = document.getElementById('carro10').value;
  document.getElementById('carro10').value = "";
  document.getElementById('carro10').focus();
}

function carrosImp4(a) {
  let str = "";
  for (let i=0; i < a.length; i++) {
    str += a[i] + "<br>";
  }
  document.getElementById('output7').innerHTML = str;
}
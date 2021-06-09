// Carne - 400gr por pessoa ---> + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa ---> + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa ---> + de 6 horas - 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.querySelector('.results');
let btnCalcular = document.querySelector('button');

let time = 6000;
let currentDivIndex = 0;
let divsInfo = document.querySelectorAll('#slider div');
let max = divsInfo.length;

btnCalcular.onclick = () => {
    resultado.innerHTML = '';

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if(adultos == '' && criancas == '' && duracao == ''){
        alert('Favor inserir quantidade de participantes e duração!')
        return;
    }

    let qtdTotalCarne = (carnePP(duracao) * adultos) + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = (cervejaPP(duracao) * adultos);
    let qtdTotalBebida = (bebidaPP(duracao) * adultos) + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de carne*</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/200)} garrafas(2L) de bebidas**</p>`;

    adcExtraInfos();

    inputAdultos.value = '';
    inputCriancas.value = '';
    inputDuracao.value = '';
};

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 450;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function adcExtraInfos(){
    let extraInfo = document.createElement('div');
    extraInfo.setAttribute('class', 'extra-info');

    let extraInfo1 = document.createElement('p');
    let txtExtraInfo1 = document.createTextNode('*quantidade dividida entre carne, frango e linguiça');
    let extraInfo2 = document.createElement('p');
    let txtExtraInfo2 = document.createTextNode('**quantidade dividida entre refrigerente, suco e água');

    extraInfo1.appendChild(txtExtraInfo1);
    extraInfo2.appendChild(txtExtraInfo2);
    extraInfo.appendChild(extraInfo1)
    extraInfo.appendChild(extraInfo2)
    resultado.appendChild(extraInfo);
}


function nextInfo(){
    divsInfo[currentDivIndex].classList.remove('selected')

    currentDivIndex++;

    if(currentDivIndex >= max){
        currentDivIndex = 0
    }

    divsInfo[currentDivIndex].classList.add('selected')
}

function start(){
    setInterval(() => {
        nextInfo()
    }, time);
}

window.addEventListener('load', start)



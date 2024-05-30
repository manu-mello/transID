const steps = ["./img/steps0.jpg",
"./img/steps1.jpg",
"./img/steps2.jpg",
"./img/steps3.jpg",
"./img/steps4.jpg",
"./img/steps5.jpg",
"./img/steps6.jpg",
"./img/steps7.jpg",
"./img/steps8.jpg",
"./img/steps9.jpg",
"./img/stepsLast.jpg"]

let i = 0;

let index = 0;

function makeImage() {
    let img = document.createElement('img')
    img.src = steps[i];
    document.getElementById('passo').appendChild(img);
}

function next() {
    let img = document.getElementById('passo').getElementsByTagName('img')[0]
    i++;
    i = i % steps.length; 
    img.src = steps[i];
}

function previous() {
    let img = document.getElementById('passo').getElementsByTagName('img')[0]
    if (i > 0) {
      i--;
      i = i % steps.length; 
      img.src = steps[i];
    }
}
const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');
const btnRestore = document.getElementById('btn-restore');
const card = document.getElementById('card');

btnRed.addEventListener("click",function(){
    document.body.style.backgroundColor = 'red';
    card.style.backgroundColor = 'red';
});

btnGreen.addEventListener("click",function(){
    document.body.style.backgroundColor = 'rgb(38, 141, 1)';
    card.style.backgroundColor = 'rgb(38, 141, 1)';
});

btnBlue.addEventListener("click",function(){
    document.body.style.backgroundColor = 'rgb(0, 17, 255)';
    card.style.backgroundColor = 'rgb(0, 17, 255)';
});

btnRestore.addEventListener("click",function(){
    document.body.style.backgroundColor = 'white';
    card.style.backgroundColor = 'white';
});
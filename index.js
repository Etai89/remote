//console.log(`hello`);
//window.alert(`alert for you!`);

var et_12 = "";

document.getElementById("gooj").textContent = et_12;

const get_text = document.getElementById(`user`);
const btn1 = document.getElementById(`btn`);
const out1 = document.getElementById(`output1`)

function fun(){
    out1.innerHTML = get_text;
}
btn1.addEventListener(`click`, fun);
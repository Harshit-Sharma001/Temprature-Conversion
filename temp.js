const num = document.getElementById(`num`);
const r1 = document.getElementById(`r1`);
const r2 = document.getElementById(`r2`);
const submit = document.getElementById(`submit`);
const p = document.getElementById(`p`);
let temp;

submit.onclick = convert;

function convert() {

    if(num.value ===``){
        p.textContent = `type the temprature`
    }
    
    else if(r1.checked){
        temp=Number(num.value);
        temp =temp * 9/5+32;
        p.textContent=temp.toFixed(1) + `°F`
    }
    else if(r2.checked){
        temp=Number(num.value);
        temp =(temp-32) * 5/9;
        p.textContent=temp.toFixed(1) + `°C`
    }
    else{
        p.textContent = `select a parameter`;
    }
    
}
const pass1=document.querySelector("#pass1");
const button1=document.getElementById("btn");
console.log(button1.id);
const length=16
function generatePassword(){
    const char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result='';
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*char.length);
        result=result+char[randomIndex];
    }
    pass1.textContent=result;
    console.log(result);
    
}
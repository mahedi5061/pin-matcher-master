function getPin(){
    const random=Math.random()*10000;
    const pin=(random+'').split('.')[0];
    if(pin.length==4){
        return pin;
    }
    else{
       return getPin();
    }
}

//display pin
function generatePin(){
    const getPinInput=document.getElementById('pin');
    getPinInput.value=getPin();
}

const buttonContainer=document.getElementById('digits-container').addEventListener('click',function(event){
    const digit=event.target.innerText;
    if(isNaN(digit)){
        if(digit=='C'){
            const typedInput=document.getElementById('typed');
        typedInput.value='';
        }
    }
    else{
        const typedInput=document.getElementById('typed');
        typedInput.value=typedInput.value+digit
    }
})

function verifyPin(){
    const pin=document.getElementById('pin').value;
    const pinInput=document.getElementById('typed').value;
    if(pin==pinInput){
        const correct=document.getElementById('correct-pin');
        correct.style.display="block";

        const incorrect=document.getElementById('incorrect-pin');
        incorrect.style.display="none";
    }
    else{
        const incorrect=document.getElementById('incorrect-pin');
        incorrect.style.display="block";
        const correct=document.getElementById('correct-pin');
        correct.style.display="none";
    }
}
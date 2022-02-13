function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin +'';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('show-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const calcInput = document.getElementById('show-num');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})


// submit button
function verifyPin(){
    const pin = document.getElementById('show-pin').value;
    const typedNumbers = document.getElementById('show-num').value;
    const success = document.getElementById('success');
    const failError = document.getElementById('failed');

    if(pin == typedNumbers){
        success.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        failError.style.display = 'block';
    }
}



function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const amount = inputField.value;
    inputField.value = '';
    return amount;
}

function updateTotalField(inputId,amount){
    const input = document.getElementById(inputId);
    const totalAmount = input.innerText;
    input.innerText = parseFloat(amount) + parseFloat(totalAmount);
}

function updateBalance(amount,isAdd){
    const balance = document.getElementById('balance-total');
    const prevBalance = balance.innerText;
    if(isAdd==true){
        balance.innerText = parseFloat(prevBalance) + parseFloat(amount);
    }
    else{
        if(parseFloat(prevBalance)<parseFloat(amount)){
            alert('It is not possible');
            return;
        }
        else{
            balance.innerText = parseFloat(prevBalance) - parseFloat(amount);
        }
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input');
    
    // update balance
    // const balance = document.getElementById('balance-total');
    // const prevBalance = balance.innerText;
    // balance.innerText = parseFloat(prevBalance) + parseFloat(depositAmount);

    if(parseFloat(depositAmount)>0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);
    }
    else{
        alert('please negative do not consider');
    }
    
    
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    
    // update balance
    // const balance = document.getElementById('balance-total');
    // const prevBalance = balance.innerText;
    // balance.innerText = parseFloat(prevBalance) - parseFloat(withdrawAmount);

    if(parseFloat(withdrawAmount) > 0){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    else{
        alert('Negative withdraw is not allowed');
    }
});


document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-1:
    const withdrawMoneyElement = document.getElementById('withdraw-money');
    const withdrawMoneyString = withdrawMoneyElement.value;
    const newWithdrawMoney = parseFloat(withdrawMoneyString);

      // step-5:
      withdrawMoneyElement.value = '';

    if(isNaN(newWithdrawMoney)){
        alert('Please enter your withdraw amount');
        return;
    }
    
    // step-2:

    const preWithdrawAmountElement = document.getElementById('withdraw-field');
    const preWithdrawAmountString = preWithdrawAmountElement.innerText;
    const preWithdrawAmount = parseFloat(preWithdrawAmountString);
    
    // step-3:
    
    const preBalanceAmountField = document.getElementById('balance-field');
    const preBalanceAmountString = preBalanceAmountField.innerText;
    const preBalanceAmount = parseFloat(preBalanceAmountString);

     // limitation of withdraw money
     if(newWithdrawMoney > preBalanceAmount){
        alert('Short of money, could not withdraw your money');
        return;
    }
    
    const currentWithdrawAmount = preWithdrawAmount + newWithdrawMoney;
    preWithdrawAmountElement.innerText = currentWithdrawAmount;
    // step-4

    const currentBalanceAmount = preBalanceAmount - newWithdrawMoney;
    preBalanceAmountField.innerText = currentBalanceAmount;

})
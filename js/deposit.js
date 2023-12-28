document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositMoneyElement = document.getElementById('deposit-money');
    const depositMoneyString = depositMoneyElement.value;
    const newDepositMoney = parseFloat(depositMoneyString);

    if(isNaN(newDepositMoney)){
        alert('Please enter your deposit amount');
        return;
    }
    // add deposit money field
    const depositFieldElement = document.getElementById('deposit-field');
    const depositMoneyAmountString = depositFieldElement.innerText;
    const preDepositMoneyAmount = parseFloat(depositMoneyAmountString);
    
    const currentDepositAmount = preDepositMoneyAmount + newDepositMoney;
    depositFieldElement.innerText = currentDepositAmount;

    const totalBalanceFieldElement = document.getElementById('balance-field');
    const totalBalanceString = totalBalanceFieldElement.innerText;
    const preBalanceAmount = parseFloat(totalBalanceString);
    const currentTotalBalance = preBalanceAmount + newDepositMoney;
    totalBalanceFieldElement.innerText = currentTotalBalance;

    depositMoneyElement.value = '';
    
})
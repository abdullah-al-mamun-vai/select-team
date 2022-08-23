






document.getElementById('per-player').addEventListener('click', function () {
    const budgetMoneyValueToNum = getInputID('budget-money')
    const budgetTotal = budgetMoneyValueToNum * 5;
    if (isNaN(budgetMoneyValueToNum)) {
        alert('please enter an valid input')

    }
    else {
        getSet('player-total', budgetTotal);

    }


})
document.getElementById('calculate-total').addEventListener('click', function () {
    const getMangerMoney = getInputID('manager-money');
    const getCoachmMoney = getInputID('coach-money');
    const getExpensesone = document.getElementById('player-total');
    const getExpensesInner = getExpensesone.innerText;
    const getExpensesInnerToNum = parseInt(getExpensesInner);
    const finalTotal = getMangerMoney + getCoachmMoney + getExpensesInnerToNum;
    if (isNaN(finalTotal)) {
        alert('please enter an valid input')
    }
    else {
        getSet('total-cost', finalTotal)

    }
})
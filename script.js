
document.getElementById('per-player').addEventListener('click', function () {
    const budgetMoneyValueToNum = getInputID('budget-money')
    const budgetTotal = budgetMoneyValueToNum * 5;
    getSet('player-total', budgetTotal);


})
document.getElementById('calculate-total').addEventListener('click', function () {
    const getMangerMoney = getInputID('manager-money');
    const getCoachmMoney = getInputID('coach-money');
    const getExpensesone = document.getElementById('player-total');
    const getExpensesInner = getExpensesone.innerText;
    const getExpensesInnerToNum = parseInt(getExpensesInner);
    const finalTotal = getMangerMoney + getCoachmMoney + getExpensesInnerToNum;
    getSet('total-cost', finalTotal)
})
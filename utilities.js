function getInputID(elementId) {
    const budgetMoney = document.getElementById(elementId);
    const budgetMoneyValue = budgetMoney.value;
    const budgetMoneyValueToNum = parseInt(budgetMoneyValue);
    return budgetMoneyValueToNum;
}
function getSet(getId, setId) {
    const getExpenses = document.getElementById(getId);
    getExpenses.innerText = setId;
}


document.getElementById('select').addEventListener('click', function () {
   
})

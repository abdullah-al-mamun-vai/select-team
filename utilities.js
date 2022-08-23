// sortcut utilities

function getInputID(elementId) {
    const budgetMoney = document.getElementById(elementId);
    const budgetMoneyValue = budgetMoney.value;
    const budgetMoneyValueToNum = parseInt(budgetMoneyValue);
    budgetMoney.value = '';
    return budgetMoneyValueToNum;
}
function getSet(getId, setId) {
    const getExpenses = document.getElementById(getId);
    getExpenses.innerText = setId;
}

function getInner(innerId) {
    const playerLength = document.getElementById(innerId);
    const playerLengthToNum = playerLength.innerText;
    return playerLengthToNum;
}



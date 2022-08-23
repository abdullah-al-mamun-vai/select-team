/* player name get area start */
function display(getAllPlayer) {
    const playerLoaction = document.getElementById('player-add');
    playerLoaction.innerHTML = '';
    for (let i = 0; i < getAllPlayer.length; i++) {
        const singlePlayer = getAllPlayer[i].playername;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${singlePlayer}</td>
        `
        if (i >= 5) {
            alert('You have added five people');
            break;

        }
        else {
            playerLoaction.appendChild(tr);
        }

    }

}
/* player name set area start */
let array = [];

function getPlayerName(element) {
    const parent = element.parentNode.parentNode.children[0].innerText;
    const playerObject = {
        playername: parent,
    }
    array.push(playerObject)
    if (array.length >= 6) {

    }
    else {
        const totalPlayer = document.getElementById('player-length').innerText = array.length;
        element.setAttribute('disabled', true);

    }

    display(array);
}
/* button click to calculate start */
document.getElementById('per-player').addEventListener('click', function () {
    const budgetMoneyValueToNum = getInputID('budget-money')
    const playerLength = parseInt(getInner('player-length'))
    const budgetTotal = budgetMoneyValueToNum * playerLength;
    /*validation*/
    if (isNaN(budgetMoneyValueToNum)) {
        alert('please enter an valid input');
    }
    else if (budgetMoneyValueToNum < 0) {
        alert('please input a valid number')
    }
    else {
        getSet('player-total', budgetTotal);
    }

})

/* button click to calculate start */

document.getElementById('calculate-total').addEventListener('click', function () {
    const getMangerMoney = getInputID('manager-money');
    const getCoachmMoney = getInputID('coach-money');
    if (getMangerMoney < 0 || getCoachmMoney < 0) {
        alert('please input a valid number');
    }
    else {
        const getExpensesone = parseInt(getInner('player-total'));
        const finalTotal = getMangerMoney + getCoachmMoney + getExpensesone;
        /*validation*/
        if (isNaN(finalTotal)) {
            alert('please enter an valid input')
        }

        else {
            getSet('total-cost', finalTotal)

        }
    }
})


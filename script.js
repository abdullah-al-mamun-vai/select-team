
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
            alert('this');
            break;

        }
        else {
            playerLoaction.appendChild(tr);
        }

    }

}

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

    }
    display(array);
}
document.getElementById('per-player').addEventListener('click', function () {
    const budgetMoneyValueToNum = getInputID('budget-money')
    const playerLength = parseInt(getInner('player-length'))
    const budgetTotal = budgetMoneyValueToNum * playerLength;
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
    const getExpensesone = parseInt(getInner('player-total'));
    const finalTotal = getMangerMoney + getCoachmMoney + getExpensesone;
    if (isNaN(finalTotal)) {
        alert('please enter an valid input')
    }
    else {
        getSet('total-cost', finalTotal)

    }
})
'player-length'

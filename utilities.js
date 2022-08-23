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
        playerLoaction.appendChild(tr);
    }
}




let array = [];

function getPlayerName(element) {
    const parent = element.parentNode.parentNode.children[0].innerText;
    const playerObject = {
        playername: parent,
    }
    array.push(playerObject)
    document.getElementById('player-length').innerText = array.length;
    display(array);
}   

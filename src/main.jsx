import "./style.css"

const number = state(0);
const main = 
<div>
    <p>Magic Dom base project</p>
    <button on:click={add}>Counter: {number.value}</button>
</div>

main.$parent(document.body)

function add() {
    number.value ++;
}


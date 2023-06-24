import "./style.css"

var number = 0;
var main = 
<div>
    <p>Magic Dom base project</p>
    <button on:click={add}>Counter: {number}</button>
</div>


main.$parent(document.body)

function add() {
    number ++;
    main.$update();
}


const count = document.getElementById("count");

function handleDecrease() {
    count.innerHTML = Number(count.innerHTML) - 1;
}

function handleIncrease() {
    count.innerHTML = Number(count.innerHTML) + 1;
}

function handleUpdate() {
    count.innerHTML = 0; // Reset the counter to 0
    console.log("The Counter Resets to 0");
}

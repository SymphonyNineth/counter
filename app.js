let counter = document.querySelector("#value"),
    decrease = document.querySelector(".decrease"),
    reset = document.querySelector(".reset"),
    increase = document.querySelector(".increase");

value = 0;

function writeValue () {
    counter.textContent = value;
}

function decreaseValue (e) {
    e.preventDefault();
    value --;
    if(value < 0){
        counter.classList.add("negative");
    } 
    if(value === 0){
        counter.classList.remove("positive");
    }
    writeValue();
}

function resetValue (e) {
    e.preventDefault();
    value = 0;
    counter.classList.remove("negative");
    counter.classList.remove("positive");
    writeValue();

}

function increaseValue (e) {
    e.preventDefault();
    value ++;
    if(value === 0){
        counter.classList.remove("negative");
    } 

    if(value > 0){
        counter.classList.add("positive");
    }
    writeValue();
}



decrease.addEventListener("click", decreaseValue);

reset.addEventListener("click", resetValue);

increase.addEventListener("click", increaseValue);
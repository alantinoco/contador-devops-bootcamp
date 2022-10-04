var value = 0;

document.getElementById("increment-btn").onclick = function(){
    value += 1;
    console.log(value);
    document.getElementById("output").innerHTML = value;
}

document.getElementById("decrement-btn").onclick = function(){
    value -= 1;
    document.getElementById("output").innerHTML = value;
}

document.getElementById("reset-btn").onclick = function(){
    value = 0;
    document.getElementById("output").innerHTML = value;
}
window.onload = function() {
    let btn = document.getElementById("jump");
    let count = 0;
    
    btn.onclick = function() {
        count += 1;
        console.log(count)
    }
}

window.onload = function() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let x = 300;
    let y = 350;

    context.arc(x, y, 50, 0, 2*Math.PI);
    context.fillStyle="red";
    context.fill();
}
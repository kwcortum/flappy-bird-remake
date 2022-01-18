window.onload = function() {
    let btn = document.getElementById("jump");
    let count = 0;

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let x = 300;
    let y = 350;

    context.beginPath();
    context.arc(x, y, 50, 0, 2*Math.PI);
    context.fillStyle="red";
    context.fill();
    
    btn.onclick = function() {
        count += 1;
        console.log(count);
        y -= 25;
        console.log(y);
        if (y <= -50) {
            y = 450;
          }
        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(x, y, 50, 0, 2*Math.PI);
        context.fillStyle="red";
        context.fill();

        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
    }
}
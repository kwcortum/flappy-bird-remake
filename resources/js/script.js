window.onload = function() {
    let count = 0;

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let x = 300;
    let y = 350;
    let t = Date.now();
    let speed = 25;

    context.beginPath();
    context.arc(x, y, 50, 0, 2*Math.PI);
    context.fillStyle="red";
    context.fill();

    document.onkeydown = function() {
        count += 1;
        y -= 25;
        speed = 25;
        console.log(count, y);
        draw();
    }

    document.ontouchstart = function() {
        count += 1;
        y -= 25;
        speed = 25;
        draw();
    }

    function draw() {

        context.clearRect(0, 0, 600, 400);

        context.beginPath();
        context.arc(x, y, 50, 0, 2*Math.PI);
        context.fillStyle="red";
        context.fill();

        context.font = '25px Arial';
        context.fillStyle = 'white'; 
        context.fillText("Count: " + count, 20, 30);

        let timePassed = (Date.now()-t)/1000;
        t = Date.now();

        if(y <= 350) {
            speed += 50 * timePassed;
            y += speed*timePassed;
        }

        if (y > 350) {
            count = 0;
        }   

        if (y <= 50) {
            count = 0;
            y = 350;
        }

        if (y <= 175) {
            context.font = "16px Arial";
            context.fillStyle = "white";
            context.fillText("Don't touch the ceiling!", 20, 60);
        }

        window.requestAnimationFrame(draw);
    }
    
}
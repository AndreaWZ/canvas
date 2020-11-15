window.onload = function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener("mousemove", function(event){
        let x = event.clientX;
        let y = event.clientY;

        context.fillRect(x, y, 5, 5);
        let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.1, 'orange');
        gradient.addColorStop(0.2, 'yellow');
        gradient.addColorStop(0.3, 'lightgreen');
        gradient.addColorStop(0.4, '#8ED6FF');
        gradient.addColorStop(0.5, '#004CB3');
        gradient.addColorStop(0.6, 'purple');
        gradient.addColorStop(0.7, 'pink');
        gradient.addColorStop(0.8, 'lightpink');
        gradient.addColorStop(0.9, 'coral');
        gradient.addColorStop(1, 'wheat');   
        context.fillStyle = gradient;

        // console.log("x: " + x + "; y: " + y);
        var coords = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("demo").innerHTML = coords;
    })
}
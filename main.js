window.onload = function() {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext("2d"); // **--> c stand for 'context' in canvas

    canvas.addEventListener("mousemove", function(event){
        let x = event.clientX;
        let y = event.clientY;

        c.fillRect(x, y, 20, 20); // **--> c.fillReact(x, y, width, height);
        let gradient = c.createLinearGradient(0, 0, canvas.width, canvas.height);
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
        c.fillStyle = gradient;
    })
}

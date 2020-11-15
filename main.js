window.onload = function() {
    const canvas = document.getElementById("canvas");

    canvas.addEventListener("click", function(event){
        let x = event.clientX;
        let y = event.clientY;

        console.log("x: " + x + "; y: " + y);
    })
}
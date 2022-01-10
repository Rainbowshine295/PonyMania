function start() {
    window.alert("Searching...");
    document.getElementById("static").play();
    var myImage = new Image(screen.width,screen.height);
    myImage.src = 'screamer.png';
    document.getElementById("div").innerHTML = "";
    document.body.appendChild(myImage);
    link = document.getElementById("link");
    image = "result.png";
    link.href = image;
    link.click();
}
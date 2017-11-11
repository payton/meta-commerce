console.log("First line of content.js");
window.onload = transformImages();

var buttonStyle = "position: absolute;" +
                  "width: 100px;" +
                  "height: 30px;" +
                  "background-color: green;" +
                  "margin: 0;" +
                  "padding: 0;" +
                  "top: 0;" +
                  "left: 0;" +
                  "";

function transformImages() {
  console.log('Start tranform images');
  var images = document.images;
  for (var i = 0; i < images.length; i++) {
    EXIF.getData(images[i], function() {
        var font = document.createElement("link");
        font.setAttribute("href", "https://fonts.googleapis.com/css?family=Raleway");
        font.setAttribute("rel", "stylesheet");
        document.head.appendChild(font);
        if (EXIF.getTag(this, "URL TEST") != null) {
          console.log(EXIF.getTag(this, "URL TEST"));
          var overlay = document.createElement("div");
          var button = getButton();
          this.parentNode.insertBefore(overlay, this);
          overlay.setAttribute("width", this.getAttribute("width"));
          overlay.setAttribute("height", this.getAttribute("height"));
          overlay.setAttribute("style", "position: relative;");
          overlay.addEventListener("mouseout", function(){
            button.style.transition = ".2s";
            document.getElementById("button").style.visibility = "hidden";
          });
          overlay.addEventListener("mouseover", function(){
            button.style.transition = ".2s";
            document.getElementById("button").style.visibility = "visible";
          });
          overlay.appendChild(this);
          overlay.appendChild(button);
        }
        var allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData);
    });
  }
}

function getButton() {
  var button = document.createElement("div");
  button.style.position = "absolute";
  button.style.width = "200px";
  button.style.height = "60px";
  button.style.border = "4px solid #232323";
  button.style.backgroundColor = "rgba(35, 35, 35, 0.5)"
  button.style.fontSize = "20px";
  button.style.fontFamily = "'Raleway', sans-serif";
  button.style.textAlign = "center";
  button.style.color = "white";
  button.style.margin = 0;
  button.style.padding = 0;
  button.style.top = 0;
  button.style.left = 0;
  button.style.visibility = "visible";
  button.addEventListener("mouseover", function(){
    button.style.cursor = "pointer";
  })
  button.addEventListener("mouseout", function(){
    button.style.cursor = "inherit";
  })
  button.id = "button";
  button.innerHTML = "PURCHASE";
  return button;
}

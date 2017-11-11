console.log("First line of content.js");
window.onload = transformImages();


function transformImages() {
  console.log('Start tranform images');
  var images = document.images;
  for (var i = 0; i < images.length; i++) {
    EXIF.getData(images[i], function() {
        if (EXIF.getTag(this, "URL TEST") != null) {
          console.log(EXIF.getTag(this, "URL TEST"));
          var overlay = document.createElement("div");
          var button = document.createElement("div");
          button.setAttribute("style", "position: absolute; width: 100px; height: 30px; background-color: green; margin: 0; padding: 0; top: 0; left: 0;");
          button.innerHTML = "PURCHASE";
          this.parentNode.insertBefore(overlay, this);
          overlay.setAttribute("width", this.getAttribute("width"));
          overlay.setAttribute("height", this.getAttribute("height"));
          overlay.setAttribute("style", "position: relative;");
          overlay.appendChild(this);
          overlay.appendChild(button);
        }
        var allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData);
    });
  }
}

console.log("First line of content.js");
window.onload = transformImages();

function transformImages() {
  console.log('Start tranform images');
  var images = document.images;
  for (var i = 0; i < images.length; i++) {
    EXIF.enableXmp();
    console.log(EXIF.isXmpEnabled);
    EXIF.getData(images[i], function() {
        var allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData);
    });
  }
}

console.log("First line of content.js");
window.onload = transformImages();

function transformImages() {
  console.log('Start tranform images');
  var images = document.images;
  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
    EXIF.getData(images[i], function() {
        addModal();
        var font = document.createElement("link");
        font.setAttribute("href", "https://fonts.googleapis.com/css?family=Raleway");
        font.setAttribute("rel", "stylesheet");
        var css = document.createElement("style");
        css.innerHTML = ".overlay:hover .cart { visiblity: visible; transition: .2s; }";
        document.head.appendChild(font);
        document.head.appendChild(css);
        if (EXIF.getTag(this, "URL TEST") != null) {
          console.log(EXIF.getTag(this, "URL TEST"));
          var overlay = document.createElement("div");
          var purchase = getButton();
          this.parentNode.insertBefore(overlay, this);
          overlay.setAttribute("width", this.offsetWidth);
          overlay.setAttribute("height", this.offsetHeight);
          overlay.setAttribute("style", "position: relative; margin: 0; padding: 0");
          overlay.setAttribute("class", "overlay");
          overlay.appendChild(this);
          overlay.appendChild(purchase);
          var button = document.getElementById('submit-button');
          braintree.dropin.create({
            authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
            selector: '#dropin-container'
          }, function (err, instance) {
            button.addEventListener('click', function () {
              instance.requestPaymentMethod(function (err, payload) {
                // Submit payload.nonce to your server
              });
            })
          });
        }
        var allMetaData = EXIF.getAllTags(this);
        console.log(allMetaData);
    });
  }
}

function getButton() {
  var container = document.createElement("label");
  container.style.width = "24px";
  container.style.height = "auto";
  container.style.position = "absolute";
  container.style.margin = "0px";
  container.style.bottom = "4px";
  container.style.left = "4px";
  var link = document.createElement("a");
  link.href="http://google.com";
  var button = document.createElement("img");
  button.src = "../img/ic_shopping_cart_white_24dp_2x.png";
  button.style.width = "24px";
  button.style.height = "auto";
  button.zIndex = "10";
  container.setAttribute("for", "modal_1");
  container.setAttribute("class", "cart button");
  link.appendChild(button);
  container.appendChild(button);
  button.id = "button";
  return container;
}

function addModal() {
  var modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = '<div class="modal">' +
    '<input id="modal_1" type="checkbox" />' +
    '<label for="modal_1" class="overlay"></label>' +
    '<article style="padding: 10px;">' +
    '<div id="dropin-container"></div><button id="submit-button" class="button button--small button--green">Purchase</button></article>' +
    '</div>';
  document.body.appendChild(modal);
}

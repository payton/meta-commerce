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
        if (EXIF.getTag(this, "MetaCommerce") != null) {
          var json = JSON.parse(EXIF.getTag(this, "MetaCommerce"));
          document.getElementById("description").innerHTML = "<p style='text-align: center;'><b>" + json.title + "</b><br>" + json.price + "</p>";
          var overlay = document.createElement("div");
          var purchase = getButton();
          this.parentNode.insertBefore(overlay, this);
          overlay.setAttribute("width", this.width);
          overlay.setAttribute("height", this.height);
          overlay.setAttribute("style", "position: relative; margin: 0; padding: 0");
          overlay.setAttribute("class", "overlay");
          overlay.appendChild(this);
          overlay.appendChild(purchase);
          overlay.addEventListener("mouseover", function(){
            document.getElementById("cart").style.visibility = "visible";
            document.getElementById("cart").style.opacity = "1";
          });
          overlay.addEventListener("mouseout", function(){
            document.getElementById("cart").style.visibility = "hidden";
            document.getElementById("cart").style.opacity = "0";
          });
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
  container.id = "cart";
  // container.style.width = "24px";
  // container.style.height = "auto";
  container.style.position = "absolute";
  container.style.margin = "1%";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.transition = "all .2s linear";
  var link = document.createElement("a");
  link.href="http://google.com";
  var button = document.createElement("img");
  button.src = "../img/ic_shopping_cart_white_24dp_2x.png";
  button.style.width = "24px";
  button.style.height = "auto";
  container.zIndex = "10";
  container.setAttribute("for", "modal_1");
  container.setAttribute("class", "cart button");
  link.appendChild(button);
  container.appendChild(button);
  container.style.visibility = "hidden";
  container.style.opacity = "0";
  button.id = "button";
  return container;
}

function addModal() {
  var modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.innerHTML = '<div class="modal">' +
    '<input id="modal_1" type="checkbox" />' +
    '<label for="modal_1" class="overlay"></label>' +
    '<article style="padding: 10px;"><section id="description">$99.99</section>' +
    '<div id="dropin-container"></div><button id="submit-button" class="button button--small button--green">Purchase</button></article>' +
    '</div>';
  document.body.appendChild(modal);
}

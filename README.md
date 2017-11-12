# Meta Commerce
Images are used on nearly every website, yet we never use them to their full potential.  Every image contains useful ***metadata*** that describes different aspects of itself.  Meta Commerce aims to capitalize upon this feature by ***embedding*** important product information such as title, price, and seller.  By doing this, we can simplify the selling process online.  Let's look into this...
## Getting Started
First, install the plugin in Chrome and then build the image.
### Installing the Plugin
1. Open Chrome and go to ```chrome://extensions```
2. Select the '*Developer mode*' checkbox
3. Click on '*Load unpacked extension...*' and select the unpacked directory

### Building an Image
1. Take a picture of the item you wish to sell
2. Place it in the *demo* folder
3. Run ```build.bat``` and fill out the requested information (be sure to include the file extension when inputting the file)
4. Open the built image in Chrome...
5. You can now hover it and select the cart button to purchase via credit card

## Acknowledgments
<li>[Exif-js](https://github.com/exif-js/exif-js) - Metadata extraction</li>
<li>[Exif Tool](https://www.sno.phy.queensu.ca/~phil/exiftool/) - Embedded custom metadata</li>
<li>[Braintree](https://www.braintreepayments.com/) - Integrated payment method</li>

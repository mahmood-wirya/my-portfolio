function resize() {
    let url = document.getElementById('url').value;
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
  
    /* only returns index number of last occurence of the forward slash : 27 */
    let lastIndex = url.lastIndexOf('/');
    //
    let lastPart = url.substring(lastIndex);
    let generatedUrl = `https://source.unsplash.com${lastPart}/${width}x${height}`;
  
    // alert(generatedUrl);
  
    // https://unsplash.com/photos/mASiL-TP0eU
    // https://source.unsplash.com/mASiL-TP0eU/heightxwidth
  
    /* Make Image Visible Once We Have The URL Generated */
    let ourImage = document.getElementById('ourImage');
    ourImage.src = `${generatedUrl}`;
    ourImage.style.display = 'block';
  
    /* Make URL Placeholder appear once we have the URL */
    let urlDiv = document.getElementById('new-url');
  
    urlDiv.style.display = 'inline-block';
    urlDiv.innerHTML = `<i class="bi bi-clipboard"></i>  ${generatedUrl}`;
  }
  
  function handleCopy() {
    // retrieve the text from inside the element itself
    //  copy that text to clipboard
    let innerTxt = document.getElementById('new-url').innerText;
  
    copyToClipboard(innerTxt);
  }
  
  /* copy whatever passed to it to the clipboard */
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  }
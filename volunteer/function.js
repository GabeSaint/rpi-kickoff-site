function copyToClipboard(node) {
    // Get the text to copy
    var text = node.innerText;

    // Create a temporary textarea to copy the text
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);

    // Copy the text and remove the temporary textarea
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);


}
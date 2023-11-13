document.addEventListener("DOMContentLoaded", function () {
  const textToCopy = "www.kookdownload.com";
  const copyButton = document.getElementById("copyButton");

  copyButton.addEventListener("click", function () {
    // Create a temporary textarea element
    const tempTextarea = document.createElement("textarea");

    // Set its value to the content you want to copy
    tempTextarea.value = textToCopy;

    // Append the textarea to the document
    document.body.appendChild(tempTextarea);

    // Select the text inside the textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);
  });
});

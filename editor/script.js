// Include marked.js library for parsing Markdown content
const markedScript = document.createElement('script');
markedScript.src = 'https://cdn.jsdelivr.net/npm/marked@2.1.3/marked.min.js';
document.head.appendChild(markedScript);


// Function to toggle preview and handle copy button visibility
function togglePreview() {
    const previewContainer = document.getElementById('previewContainer');
    const readmeEditor = document.getElementById('readmeEditor');
    const previewButton = document.querySelector('.preBtn');
    const copyButton = document.querySelector('.copyBtn');

    if (previewContainer.style.display === 'none') {
        // Display preview
        previewContainer.style.display = 'block';
        readmeEditor.style.display = 'none';
        copyButton.style.display = 'none'; // Hide the copy button during preview

        // Use marked.js to render Markdown content
        const markedContent = marked(readmeEditor.value);

        // Inject the marked content into the preview
        document.getElementById('readmePreview').innerHTML = markedContent;

        // Adjust image size within the preview
        const images = previewContainer.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].style.maxWidth = '100%'; // Ensure the image fits within the container
            images[i].style.height = 'auto'; // Maintain the aspect ratio
        }

        // Change button text to "Close X"
        previewButton.innerHTML = '<i class="bi bi-x-diamond-fill"></i>';
    } else {
        // Hide preview
        previewContainer.style.display = 'none';
        readmeEditor.style.display = 'block';
        copyButton.style.display = 'block'; // Show the copy button when hiding preview

        // Change button text back to "Preview It"
        previewButton.innerHTML = 'Preview It';
    }
}

// Initialize clipboard.js for copy button
document.addEventListener('DOMContentLoaded', function () {
    const clipboard = new ClipboardJS('.copyBtn');

    clipboard.on('success', function (e) {
        e.clearSelection();
        alert('Copied to clipboard!');
    });
});

function generateReadme() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const installation = document.getElementById('installation').value;
  const usage = document.getElementById('usage').value;
  const contributing = document.getElementById('contributing').value;
  const testing = document.getElementById('testing').value;
  const acknowledgments = document.getElementById('acknowledgments').value;
  const license = document.getElementById('license').value;
  const imageLink = document.getElementById('imageLink').value;
  const tableOfContents = document.getElementById('tableOfContents').value;

  let readmeText = `# ${title}\n\n${description}`;

  if (imageLink.trim() !== '') {
    readmeText += `\n\n## Image\n![Image Preview](${imageLink})`;
  }

  if (installation.trim() !== '') {
    readmeText += `\n\n## Installation\n${installation}`;
  }

  if (usage.trim() !== '') {
    readmeText += `\n\n## Usage\n${usage}`;
  }

  if (contributing.trim() !== '') {
    readmeText += `\n\n## Contributing\n${contributing}`;
  }

  if (testing.trim() !== '') {
    readmeText += `\n\n## Testing\n${testing}`;
  }

  if (acknowledgments.trim() !== '') {
    readmeText += `\n\n## Acknowledgments\n${acknowledgments}`;
  }

  if (license.trim() !== '') {
    readmeText += `\n\n## License\n${license}`;
  }

  if (tableOfContents.trim() !== '') {
    readmeText += `\n\n## Table of Contents\n${tableOfContents}`;
  }

  const outputElement = document.getElementById('output');
  outputElement.innerText = readmeText;

  // Show the copy and download buttons
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');

  copyBtn.style.display = 'block';
  downloadBtn.style.display = 'block';
}

function copyToClipboard() {
  const outputElement = document.getElementById('output');
  const textToCopy = outputElement.innerText;

  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.innerHTML = '<i class="bi bi-clipboard-check"></i>';

  setTimeout(() => {
    copyBtn.innerHTML = '<i class="bi bi-clipboard"></i>';
  }, 1000);
}

function downloadReadme() {
  const outputElement = document.getElementById('output');
  const readmeText = outputElement.innerText;

  const blob = new Blob([readmeText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'README.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function resetForm() {
  document.getElementById('readmeForm').reset();
  const outputElement = document.getElementById('output');
  outputElement.innerText = '';

  // Hide the copy and download buttons
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  copyBtn.style.display = 'none';
  downloadBtn.style.display = 'none';
}

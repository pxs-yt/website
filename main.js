function saveText() {
    const text = document.getElementById('code-editor').value;
    const filename = "my_code.txt";
    const blob = new Blob([text], { type: 'text/plain' });
  
    if (window.navigator.saveAs) {
      window.navigator.saveAs(blob, filename);
    } else {
      // Handle older browsers with download link
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    }
  }
  
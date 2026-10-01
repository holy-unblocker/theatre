function downloadEXE() {
  const link = document.createElement('a');
  link.href = 'webfishing.exe'; 
  link.download = 'webfishing.exe'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function loadPayloads() {
  document.getElementById('payloadInput').click();
}
document.getElementById('payloadInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById('output').textContent = e.target.result;
  };
  reader.readAsText(file);
});
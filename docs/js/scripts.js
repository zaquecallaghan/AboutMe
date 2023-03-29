function on(id) {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.addEventListener('click', () => off(id));
  document.getElementById(id).showModal();
}

function off(id) {
  var overlay = document.getElementById("overlay");
  overlay.removeEventListener('click', () => off(id));
  overlay.style.display = "none";
  document.getElementById(id).close();
}

async function show(filename) {
  const response = await fetch(filename);
  const content = await response.text();
  const dialog = document.getElementById('staticdlg');
  // set the dialog content
  dialog.innerHTML = content;

  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  overlay.addEventListener('click', () => off('staticdlg'));

  dialog.showModal();
}


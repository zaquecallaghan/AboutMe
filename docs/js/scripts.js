function on(id) {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    overlay.addEventListener('click',()=>off(id));
    document.getElementById(id).showModal();
  }

function off(id) {
    var overlay = document.getElementById("overlay");
    overlay.removeEventListener('click',()=>off(id));
    overlay.style.display = "none";
    document.getElementById(id).close();
  }
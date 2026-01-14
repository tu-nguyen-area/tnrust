function OpenNav() {
  document.getElementById("idNav").style.display = "block";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("closeNav").style.display = "block";
}

function CloseNav() {
  document.getElementById("closeNav").style.display = "none";
  document.getElementById("openNav").style.display = "block";
  document.getElementById("idNav").style.display = "none";
}

GetFooterYear();

function GetFooterYear() {
  const d = new Date();
  document.getElementById("fyear").innerHTML = d.getFullYear();
}

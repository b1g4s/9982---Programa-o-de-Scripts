let prato = [];
function plate(){
  prato[prato.length] = document.getElementById('prato').value;
  document.getElementById('prato').value = "";
  document.getElementById('prato').focus();
  prato.sort();

}
function plateImp(a) {
  let str = "";
  for (let i=0; i < a.length; i++) {
    str += a[i] + "<br>";
  }
  document.getElementById('out').innerHTML = str;
}
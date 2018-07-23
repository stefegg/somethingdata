myBows = '';
function getBow() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myBows = JSON.parse(this.responseText);
      }
    };
  xhttp.open("GET", "https://raw.githubusercontent.com/stefegg/somethingdata/master/bows.json", true);
  xhttp.send();
}

getBows = getBow();

a = document.getElementById('weaponName').innerHTML = myBows.weapons.bows.Longbow;

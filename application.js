myBows = [];
weaponStuff = [];

function getBow() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myBows = JSON.parse(this.responseText);
      }
    };
  xhttp.open("GET", "https://raw.githubusercontent.com/stefegg/somethingdata/master/bows.json", true);
  xhttp.send();
}



// function showWeapon(id){
//   document.getElementbyId('waeponName').innerHTML = allBows[id].weapons.bows.name;
//
// }

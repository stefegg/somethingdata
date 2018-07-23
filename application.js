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

function showLong(){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.Longbow.name;
	let atTack = myBows.weapons.bows.Longbow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.Longbow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showSilver(){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.SilverBow.name;
	let atTack = myBows.weapons.bows.SilverBow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.SilverBow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showIce(){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.Longbow.name;
	let atTack = myBows.weapons.bows.Longbow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.Longbow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}


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

function getSword() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      mySwords = JSON.parse(this.responseText);
      }

    };
  xhttp.open("GET", "https://raw.githubusercontent.com/stefegg/somethingdata/master/swords.json", true);
  xhttp.send();
}

getSword();
getBow();
// showLong();

function showLong(myBows){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.Longbow.name;
	let atTack = myBows.weapons.bows.Longbow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.Longbow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}


function showSilver(myBows){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.SilverBow.name;
	let atTack = myBows.weapons.bows.SilverBow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.SilverBow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showIce(myBows){
	document.getElementById('weaponName').innerHTML = myBows.weapons.bows.IceBow.name;
	let atTack = myBows.weapons.bows.IceBow.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = myBows.weapons.bows.IceBow.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showBroad(mySwords){
	document.getElementById('weaponName').innerHTML = mySwords.weapons.swords.Broadsword.name;
	let atTack = mySwords.weapons.swords.Broadsword.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = mySwords.weapons.swords.Broadsword.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showLongsword(mySwords){
	document.getElementById('weaponName').innerHTML = mySwords.weapons.swords.Longsword.name;
	let atTack = mySwords.weapons.swords.Longsword.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = mySwords.weapons.swords.Longsword.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

function showIronsword(mySwords){
	document.getElementById('weaponName').innerHTML = mySwords.weapons.swords.IronSword.name;
	let atTack = mySwords.weapons.swords.IronSword.atk;
	document.getElementById('atk').innerHTML = `Attack: ${atTack}`;
	let cOst = mySwords.weapons.swords.IronSword.cost;
	document.getElementById('cost').innerHTML = `Cost: ${cOst} gil`;
}

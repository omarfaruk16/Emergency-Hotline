const favorites = document.getElementsByClassName("favorite");

// Loop through them and add event listener
for (let i = 0; i < favorites.length; i++) {
  favorites[i].addEventListener("click", function () {
    const favElement = document.getElementById("fav-number");
    let favNumber = parseInt(favElement.innerText);
    favNumber = favNumber + 1;
    favElement.innerText = favNumber;
  });
}


// Calling function

function calling(id) {
  const coins = document.getElementById("coin-number");
  const coinNumber = parseInt(coins.innerText);

  const chaild = document.getElementById(id);
  const parent = chaild.parentNode;
  const grandParent = parent.parentNode;
  console.log(grandParent);
  const serviceName = grandParent.querySelector("#serviceName").innerText;
  const number = grandParent.querySelector("#number").innerText;

  if (coinNumber >= 20) {
    coins.innerText = coinNumber - 20;
    alert(
      "Calling Emergency Hotline...Service: " +
        serviceName +
        "Number: " +
        number
    );
  } else {
    alert(
      "You don't have enough coins to make a call. Please recharge your coins."
    );
  }
}

// Copyed Function 

function copyNumber(id) {
  const chaild = document.getElementById(id);
  const parent = chaild.parentNode;
  const grandParent = parent.parentNode;
  const number = grandParent.querySelector("#number").innerText;
  navigator.clipboard.writeText(number).then(function () {
    alert("Number " + number + " copied to clipboard!");
  });
  const copyNumberElement = document.getElementById("copy-number");
  let copyNumber = parseInt(copyNumberElement.innerText);
  copyNumber = copyNumber + 1;
  copyNumberElement.innerText = copyNumber;
} 





document.getElementById("callNationalEmergency").addEventListener("click", function () {
    calling("callNationalEmergency");});
document.getElementById("callPolice").addEventListener("click", function () {
  calling("callPolice");});
document.getElementById("callFireService").addEventListener("click", function () {
    calling("callFireService");});
document.getElementById("callAmbulance").addEventListener("click", function () {
  calling("callAmbulance");});
document.getElementById("callWoman&child").addEventListener("click", function () {
    calling("callWoman&child");});
document.getElementById("callAntryCorruption").addEventListener("click", function () {
    calling("callAntryCorruption");});
document.getElementById("callElectricity").addEventListener("click", function () {
    calling("callElectricity");});
document.getElementById("callBrac").addEventListener("click", function () {
  calling("callBrac");});
document.getElementById("callBDRail").addEventListener("click", function () {
  calling("callBDRail");});


document.getElementById("copyNationalEmergency").addEventListener("click", function () {
    copyNumber("copyNationalEmergency");});
document.getElementById("copyPolice").addEventListener("click", function () {
    copyNumber("copyPolice");});
document.getElementById("copyFireService").addEventListener("click", function () {
    copyNumber("copyFireService");});
document.getElementById("copyAmbulance").addEventListener("click", function () {
    copyNumber("copyAmbulance");});
document.getElementById("copyWoman&child").addEventListener("click", function () {
    copyNumber("copyWoman&child");});
document.getElementById("copyAntryCorruption").addEventListener("click", function () {
    copyNumber("copyAntryCorruption");});    
document.getElementById("copyElectricity").addEventListener("click", function () {
    copyNumber("copyElectricity");});
document.getElementById("copyBrac").addEventListener("click", function () {
    copyNumber("copyBrac");});
document.getElementById("copyBDRail").addEventListener("click", function () {
    copyNumber("copyBDRail");});   
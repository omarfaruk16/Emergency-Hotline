// History
const History = [];

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
  const serviceName = grandParent.querySelector("#serviceName").innerText;
  const number = grandParent.querySelector("#number").innerText;

  if (coinNumber >= 20) {
    coins.innerText = coinNumber - 20;
    alert("Calling Emergency Hotline...Service: " + serviceName + "Number: " + number);
    History.push({
      serviceName: serviceName,
      number: number,
      time: new Date().toLocaleString(),
    });

    seeCallHistory();
  } else {
    alert("You don't have enough coins to make a call. Please recharge your coins.");
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
  calling("callNationalEmergency");
});
document.getElementById("callPolice").addEventListener("click", function () {
  calling("callPolice");
});
document.getElementById("callFireService").addEventListener("click", function () {
  calling("callFireService");
});
document.getElementById("callAmbulance").addEventListener("click", function () {
  calling("callAmbulance");
});
document.getElementById("callWoman&child").addEventListener("click", function () {
  calling("callWoman&child");
});
document.getElementById("callAntryCorruption").addEventListener("click", function () {
  calling("callAntryCorruption");
});
document.getElementById("callElectricity").addEventListener("click", function () {
  calling("callElectricity");
});
document.getElementById("callBrac").addEventListener("click", function () {
  calling("callBrac");
});
document.getElementById("callBDRail").addEventListener("click", function () {
  calling("callBDRail");
});

document.getElementById("copyNationalEmergency").addEventListener("click", function () {
  copyNumber("copyNationalEmergency");
});
document.getElementById("copyPolice").addEventListener("click", function () {
  copyNumber("copyPolice");
});
document.getElementById("copyFireService").addEventListener("click", function () {
  copyNumber("copyFireService");
});
document.getElementById("copyAmbulance").addEventListener("click", function () {
  copyNumber("copyAmbulance");
});
document.getElementById("copyWoman&child").addEventListener("click", function () {
  copyNumber("copyWoman&child");
});
document.getElementById("copyAntryCorruption").addEventListener("click", function () {
  copyNumber("copyAntryCorruption");
});
document.getElementById("copyElectricity").addEventListener("click", function () {
  copyNumber("copyElectricity");
});
document.getElementById("copyBrac").addEventListener("click", function () {
  copyNumber("copyBrac");
});
document.getElementById("copyBDRail").addEventListener("click", function () {
  copyNumber("copyBDRail");
});

let callHistorySection = document.getElementById("callHistorySection");
function seeCallHistory() {
  let callHistorySection = document.getElementById("callHistorySection");
  callHistorySection.innerHTML = ``;

  for (const data of History) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="w-[350px] bg-[#fafafa] p-4 rounded-[16px] flex justify-between items-center mb-3 shadow-sm">
        <div>
          <p class="font-medium text-[16px]">${data.serviceName}</p>
          <p class="text-[#5c5c5c] font-normal text-base">${data.number}</p>
        </div>
        <div class="mt-2 text-right">
          <p class="text-[#5c5c5c] font-normal text-sm">${data.time}</p>
        </div>
      </div>
    `;
    callHistorySection.appendChild(div);
  }
}

document.getElementById("clearButton").addEventListener("click", function () {
  console.log("Clear button clicked");
  History.length = 0; 
  callHistorySection.innerHTML = "";
  seeCallHistory();
});

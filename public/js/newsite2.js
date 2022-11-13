let newSite = {};
async function getConnectorId(account, bearer) {
  var myHeaders = new Headers();
  myHeaders.append("authorization", "Bearer " + bearer);
  myHeaders.append("Cookie", "JSESSIONID=765FED3E0C32AC23D6429203CB5FBDE0");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    "https://va.ac.liveperson.net/api/account/" +
      account +
      "/configuration/le-connectors/connectors?v=2.0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData[0].id;
      console.log("🚀 connectorId " + jsonData[0].id);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      throw "something wrong";
    });
}

async function getVisitorBehavior(account, bearer) {
  var myHeaders = new Headers();
  myHeaders.append("authorization", "Bearer " + bearer);
  myHeaders.append("Cookie", "JSESSIONID=F28691A1DE7C425D38B6F49069680962");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    "https://va.ac.liveperson.net/api/account/" +
      account +
      "/configuration/le-targeting/visitor-behaviors?v=2.0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData[0].id;
      console.log("🚀 visitor behavior " + jsonData[0].id);
      return result;
    })
    .catch((error) => console.log("error", error));
}
async function getOnsiteLocationId(account, bearer) {
  var myHeaders = new Headers();
  myHeaders.append("authorization", "Bearer " + bearer);
  myHeaders.append("Cookie", "JSESSIONID=F28691A1DE7C425D38B6F49069680962");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    "https://va.ac.liveperson.net/api/account/" +
      account +
      "/configuration/le-targeting/onsite-locations?v=3.0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData[0].id;
      console.log("🚀 onsiteLocation " + jsonData[0].id);
      return result;
    })
    .catch((error) => console.log("error", error));
}
async function getWindowId(account, bearer) {
  var myHeaders = new Headers();
  myHeaders.append("authorization", " Bearer " + bearer);
  myHeaders.append("Cookie", "JSESSIONID=7702259C698954A664CB0F0E075C0D6B");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    "https://va.ac.liveperson.net/api/account/" +
      account +
      "/configuration/engagement-window/window-confs?v=2.0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData[0].id;
      console.log("🚀 windowId " + jsonData[0].id);
      return result;
    })
    .catch((error) => console.log("error", error));
}

async function getCampaigns(account, bearer) {
  var myHeaders = new Headers();
  myHeaders.append("authorization", "Bearer " + bearer);
  myHeaders.append("Cookie", "JSESSIONID=91382CDBABFA988783DEE81B9361B1C0");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return await fetch(
    "https://va.ac.liveperson.net/api/account/" +
      account +
      "/configuration/le-campaigns/campaigns?v=3.4&fields=id",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData[0].id;
      console.log("🚀 campaign id " + result);
      return result;
    })
    .catch((error) => console.log("error", error));
}
async function setIdp(site) {
  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(site),
    redirect: "follow",
  };
  return await fetch("/newidp", requestOptions)
    .then((response) => response.status)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      throw "something wrong";
    });
}

async function getBearer(site) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    username: site.userId,
    password: site.pwd,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch(
    "https://" + site.vep + "/api/account/" + site.account + "/login?v=1.3",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var result = jsonData.bearer;
      console.log("🚀 bearer = " + result);
      return result;
    })
    .catch((error) => console.log("error", error));
}

async function getVep(account) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return await fetch(
    "https://api.liveperson.net/api/account/" +
      account +
      "/service/baseURI?version=1.0",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      var jsonData = JSON.parse(result);
      var baseURIs = jsonData.baseURIs;
      var result = baseURIs.find(
        (entry) => entry.service == "agentVep"
      ).baseURI;
      var accountConfigReadWrite = baseURIs.find(
        (entry) => entry.service == "accountConfigReadWrite"
      ).baseURI;
      
      console.log("🚀 vep|accountConfigReadWrite = " + result + "|" + accountConfigReadWrite);
      return result + "|" + accountConfigReadWrite;
    })
    .catch((error) => console.log("error", error));
}
async function setEngagement(site) {
  var myHeaders = new Headers();
  myHeaders.append("content-type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(site),
    redirect: "follow",
  };
  return await fetch("/newengagement", requestOptions)
    .then((response) => response.status)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.log("error", error);
      throw "something wrong";
    });
}
async function createEnagement() {
  try {
    newSite.account = document.getElementById("siteId").value;
    newSite.userId = document.getElementById("userId").value;
    newSite.pwd = document.getElementById("pwd").value;

    newSite.vepac = await getVep(newSite.account);
    newSite.vep = newSite.vepac.split("|")[0];
    newSite.accountConfigReadWrite = newSite.vepac.split("|")[1];
    newSite.bearer = await getBearer(newSite);
    // newSite.implicit = await setIdp(newSite);
    newSite.campaign = await getCampaigns(newSite.account, newSite.bearer);
    newSite.windowId = await getWindowId(newSite.account, newSite.bearer);
    newSite.onsiteLocaitonId = await getOnsiteLocationId(
      newSite.account,
      newSite.bearer
    );
    newSite.visitorBehavior = await getVisitorBehavior(
      newSite.account,
      newSite.bearer
    );
    newSite.connectorId = await getConnectorId(newSite.account, newSite.bearer);
    newSite.url = await setEngagement(newSite);
    //location.href = "http://localhost:3000/?site=" + newSite.account;
  } catch (error) {
    hide();
  }
}

// (A) SHOW & HIDE SPINNER
function show() {
  // validate form first
  const form = document.querySelector("form");
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  // if form is good then throw the spinner
  document.getElementById("spinner").classList.add("show");

  // perform all actions to do engagement creation
  try {
    createEnagement();
  } catch (error) {
    hide();
  }
}
function hide() {
  document.getElementById("spinner").classList.remove("show");
  // show alert
  alert("🤷‍♀️ Something went wrong...", "danger");
}

function alert(message, type) {
  var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}

window.addEventListener("load", function () {
  document.getElementById("create").addEventListener("click", show);
});

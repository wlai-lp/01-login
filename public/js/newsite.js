// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

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
      .catch((error) => console.log("error", error));
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

  async function setImplicit(account, bearer) {
    var myHeaders = new Headers();
    myHeaders.append("authority", "va.ac.liveperson.net");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("authorization", "Bearer " + bearer);
    myHeaders.append("content-type", "application/json");
    myHeaders.append("origin", "https://z1-a.le.liveperson.net");
    myHeaders.append(
      "sec-ch-ua",
      '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"macOS"');
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-site");
    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );
    myHeaders.append("Cookie", "JSESSIONID=2B06CA2DFB309E4F278A7A1A6C6A060E");

    var raw = JSON.stringify({
      configuration: {
        preferred: false,
        jwtValidationType: "PUBLIC_JWT_KEY",
        issuerDisplayName: "Auth0",
        authorizationEndpoint: "https://dev-ebsf4fc7.us.auth0.com/authorize",
        issuer: "https://www.auth0.com",
        jwtPublicKey:
          "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt0kssy5Z4S5/V7Ub24tDoPgW7PO97+5q+UjOR7CrFruY0vfZqC7EWWBjNqlU+boNcaQS7dfo/V+Nut4bAXEvbuYcPNseBQBF/tiLv0sGEbafM+tvq1qAnn2dKNE7H1XSZtkDo8rHwzcibZhl7cKOvSSthaUws7sqNhk3rHM6wd49zGKCw5vi0LiWECdwlv39GL4O0ddFJPqijIhdnkRGHFXe3qYI/Ai7gPYjoua5oSoNfnuMXFFzXkxmy2bkyW5KJZYLEH4Hf/67Gjq8YE0AjI3SB+c8uuw9UJBlPYKPfrBdgjOOwAj+TgDy/Z4NPluxSnhng579zLXnrHrZFFAfXQIDAQAB",
        jsMethodName: "lpGetAuthenticationToken",
        jsContext: "window",
        tokenEndpoint: null,
        clientId: null,
        clientSecret: null,
        jwksEndpoint: null,
      },
      type: 1,
      name: "diaplay name",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // TODO: need to confirm this part works
    return await fetch(
      "https://va.ac.liveperson.net/api/account/" +
        account +
        "/configuration/le-connectors/connectors?v=1.0",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  async function getBearer(account, vep) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: "authagent",
      password: "P@ssword1!",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "https://" + vep + "/api/account/" + account + "/login?v=1.3",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        var jsonData = JSON.parse(result);
        var result = jsonData.bearer;
        console.log("bearer = " + result);
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
        console.log("vep = " + result);
        return result;
      })
      .catch((error) => console.log("error", error));
  }

  async function testEngagement(site) {
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
      .catch((error) => console.log("error", error));
  }

  async function createSite() {
    
    return await fetch("/newsite")
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
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
      .catch((error) => console.log("error", error));
  }

  (async () => {
    // newSite.account = 65261399;
    //newSite.account = await createSite();
    newSite.vep = await getVep(newSite.account);
    // newSite.bearer = await getBearer(newSite.account, newSite.vep);
    // newSite.implicit = await setIdp(newSite);
    // newSite.campaign = await getCampaigns(newSite.account, newSite.bearer);
    // newSite.windowId = await getWindowId(newSite.account, newSite.bearer);
    // newSite.onsiteLocaitonId = await getOnsiteLocationId(
    //   newSite.account,
    //   newSite.bearer
    // );
    // newSite.visitorBehavior = await getVisitorBehavior(
    //   newSite.account,
    //   newSite.bearer
    // );
    // newSite.connectorId = await getConnectorId(newSite.account, newSite.bearer);
    // newSite.url = await testEngagement(newSite);
    // location.href = "http://localhost:3000/?site=" + newSite.account
  })();
});

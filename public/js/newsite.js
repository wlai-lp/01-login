// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");

  let newSite = {};

  async function createEngagement(site) {
    var myHeaders = new Headers();
    myHeaders.append("authority", "va-a.ac.liveperson.net");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "en-US,en;q=0.9");
    myHeaders.append("authorization", "Bearer " + site.bearer);
    myHeaders.append("content-type", "application/json; charset=UTF-8");
    myHeaders.append(
      "cookie",
      "_hjSessionUser_1461756=eyJpZCI6IjUwNWNmMzk5LWY3YTQtNTQwMy04MzM2LTRkNGYwNTU0YzQyZCIsImNyZWF0ZWQiOjE2NTM1ODE5NTgwMzEsImV4aXN0aW5nIjp0cnVlfQ==; fbm_671485303699189=base_domain=.liveperson.net; LPVID=EzMzgzZDVhN2EwNjkzMjk3; _ga=GA1.2.1436664101.1665522100; _ga_2LLGYKSTDJ=GS1.1.1667242765.11.0.1667242765.60.0.0; LPSID-5288836=lboG7pGPT_aAPEZcgj7HUQ; idpLastSiteId=5660383; idpLastDomain=va-a2.c.liveperson.net; JSESSIONID=FC28A4F6238DB4A6561D1D36EAD6A314; JSESSIONID=CECF0B70C1E20F121EF548AFABAE0E34"
    );
    myHeaders.append("lp-domain-referer", "https://z1-a.le.liveperson.net");
    myHeaders.append(
      "lp-url",
      "https://z1-a.le.liveperson.net/a/5660383/#/camp/campaigns/web/4461081132/engagement/web/new/windows"
    );
    myHeaders.append("origin", "https://va-a.ac.liveperson.net");
    myHeaders.append(
      "referer",
      "https://va-a.ac.liveperson.net/postmessage/postmessage.min.html?bust=1667937353220&loc=https%3A%2F%2Fz1-a.le.liveperson.net"
    );
    myHeaders.append(
      "sec-ch-ua",
      '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"macOS"');
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append(
      "user-agent",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
    );
    myHeaders.append("x-requested-with", "XMLHttpRequest");

    var raw =
      '{\n    "id": null,\n    "name": "Engagement xxx",\n    "description": "",\n    "weight": 0.5,\n    "enabled": true,\n    "deleted": false,\n    "windowId": 4461570932,\n    "isPopOut": false,\n    "useSystemRouting": false,\n    "renderingType": 0,\n    "appInstallationId": null,\n    "channel": 1,\n    "showSmsPreSurveyOnMobile": false,\n    "language": "en-US",\n    "onsiteLocations": [\n        4461571732\n    ],\n    "visitorBehaviors": [\n        4461571632\n    ],\n    "source": 0,\n    "isUnifiedWindow": true,\n    "type": 6,\n    "externalTargets": null,\n    "displayInstances": [\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 2,\n            "enabled": true\n        },\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 1,\n            "enabled": true\n        },\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 4,\n            "enabled": true\n        }\n    ],\n    "position": {\n        "left": 0,\n        "top": 0,\n        "type": 6\n    },\n    "followMePages": 1,\n    "followMeTime": 0,\n    "timeInQueue": 0,\n    "availabilityPolicy": 0,\n    "conversationType": 1,\n    "connectorId": 4461573132,\n    "allowUnauthMsg": false,\n    "skillId": null,\n    "skillName": null,\n    "viewErrors": 0,\n    "subType": 24\n}';

    debugger;
    var jsonData = JSON.parse(raw);
    jsonData.windowId = site.windowId;
    jsonData.onsiteLocations[0] = site.onsiteLocaitonId;
    jsonData.visitorBehaviors[0] = site.visitorBehavior;
    jsonData.connectorId = site.connectorId;

    raw = JSON.stringify(jsonData);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return await fetch(
      "https://va-a.ac.liveperson.net/api/account/" +
        site.account +
        "/configuration/le-campaigns/campaigns/" +
        site.campaign +
        "/engagements?v=3.4&__d=2853",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

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
      "https://va-a.ac.liveperson.net/api/account/" +
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
      "https://va-a.ac.liveperson.net/api/account/" +
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
      "https://va-a.ac.liveperson.net/api/account/" +
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
      "https://va-a.ac.liveperson.net/api/account/" +
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
      "https://va-a.ac.liveperson.net/api/account/" +
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
    myHeaders.append("authority", "va-a.ac.liveperson.net");
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
      "https://va-a.ac.liveperson.net/api/account/" +
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
    return await fetch("/newengagement", requestOptions);
  }

  (async () => {
    
    newSite.account = 25754758;
    newSite.vep = await getVep(newSite.account);
    newSite.bearer = await getBearer(newSite.account, newSite.vep);
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
    // newSite.engagementId = await createEngagement(newSite);

    await testEngagement(newSite);
    // console.log("async");
  })();
});

const express = require("express");
const { join } = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "public")));

app.get("/auth_config.json", (req, res) => {
  res.sendFile(join(__dirname, "auth_config.json"));
});

app.get("/newsite", (_, res) => {
  res.sendFile(join(__dirname, "newsite.html"));
});

app.post("/newidp", (req, res) => {
  console.log("in newidp");
  var https = require("follow-redirects").https;
  var fs = require("fs");

  var options = {
    method: "POST",
    hostname: "va.ac.liveperson.net",
    path: "/api/account/" + req.body.account + "/configuration/le-connectors/connectors?v=1.0",
    headers: {
      authority: "va.ac.liveperson.net",
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      authorization: "Bearer " + req.body.bearer,
      "content-type": "application/json",
      origin: "https://z1-a.le.liveperson.net",
      "sec-ch-ua":
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      Cookie: "JSESSIONID=0B7BBC9A3ACB0D1FDE8ACAB961A51BD0",
    },
    maxRedirects: 20,
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  var postData = JSON.stringify({
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

  req.write(postData);

  req.end();

  res.status(200);
});

app.post("/newengagement", (req, res) => {
  console.log("in engagement");
  var site = req.body;
  var https = require("follow-redirects").https;

  var options = {
    method: "POST",
    hostname: "va.ac.liveperson.net",
    path:
      "/api/account/" +
      req.body.account +
      "/configuration/le-campaigns/campaigns/" +
      req.body.campaign +
      "/engagements?v=3.4&__d=2853",
    headers: {
      authority: "va.ac.liveperson.net",
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      authorization: "Bearer " + req.body.bearer,
      "content-type": "application/json; charset=UTF-8",
      cookie:
        "_hjSessionUser_1461756=eyJpZCI6IjUwNWNmMzk5LWY3YTQtNTQwMy04MzM2LTRkNGYwNTU0YzQyZCIsImNyZWF0ZWQiOjE2NTM1ODE5NTgwMzEsImV4aXN0aW5nIjp0cnVlfQ==; fbm_671485303699189=base_domain=.liveperson.net; LPVID=EzMzgzZDVhN2EwNjkzMjk3; _ga=GA1.2.1436664101.1665522100; _ga_2LLGYKSTDJ=GS1.1.1667242765.11.0.1667242765.60.0.0; LPSID-5288836=lboG7pGPT_aAPEZcgj7HUQ; idpLastSiteId=5660383; idpLastDomain=va-a2.c.liveperson.net; JSESSIONID=FC28A4F6238DB4A6561D1D36EAD6A314; JSESSIONID=0B7BBC9A3ACB0D1FDE8ACAB961A51BD0",
      "lp-domain-referer": "https://z1-a.le.liveperson.net",
      "lp-url":
        "https://z1-a.le.liveperson.net/a/5660383/#/camp/campaigns/web/4461081132/engagement/web/new/windows",
      origin: "https://va.ac.liveperson.net",
      referer:
        "https://va.ac.liveperson.net/postmessage/postmessage.min.html?bust=1667937353220&loc=https%3A%2F%2Fz1-a.le.liveperson.net",
      "sec-ch-ua":
        '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "x-requested-with": "XMLHttpRequest",
    },
    maxRedirects: 20,
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  var postData =
    '{\n    "id": null,\n    "name": "Engagement xxx",\n    "description": "",\n    "weight": 0.5,\n    "enabled": true,\n    "deleted": false,\n    "windowId": 4461570932,\n    "isPopOut": false,\n    "useSystemRouting": false,\n    "renderingType": 0,\n    "appInstallationId": null,\n    "channel": 1,\n    "showSmsPreSurveyOnMobile": false,\n    "language": "en-US",\n    "onsiteLocations": [\n        4461571732\n    ],\n    "visitorBehaviors": [\n        4461571632\n    ],\n    "source": 0,\n    "isUnifiedWindow": true,\n    "type": 6,\n    "externalTargets": null,\n    "displayInstances": [\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 2,\n            "enabled": true\n        },\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 1,\n            "enabled": true\n        },\n        {\n            "events": {\n                "click": {\n                    "enabled": true,\n                    "target": "_blank"\n                }\n            },\n            "presentation": {\n                "background": {\n                    "color": "#0363AD",\n                    "image": ""\n                },\n                "border": {\n                    "radius": 30,\n                    "width": 0,\n                    "color": "transparent"\n                },\n                "size": {\n                    "width": "40",\n                    "height": "152"\n                },\n                "elements": {\n                    "images": [\n                        {\n                            "imageUrl": "{galleryBasePath}/preview/chat/t2_c9_sn11_th4_s4_asset.png",\n                            "alt": "",\n                            "css": {\n                                "left": 8,\n                                "top": 113,\n                                "zIndex": 600\n                            }\n                        }\n                    ],\n                    "labels": [\n                        {\n                            "text": "Message us",\n                            "css": {\n                                "color": "#ffffff",\n                                "fontFamily": "Arial,Helvetica,sans-serif",\n                                "fontSize": 16,\n                                "fontStyle": "normal",\n                                "fontWeight": "normal",\n                                "left": -23,\n                                "top": 53,\n                                "transform": "rotate(270deg)",\n                                "white-space": "nowrap",\n                                "zIndex": 601\n                            }\n                        }\n                    ]\n                }\n            },\n            "macros": [],\n            "displayInstanceType": 4,\n            "enabled": true\n        }\n    ],\n    "position": {\n        "left": 0,\n        "top": 0,\n        "type": 6\n    },\n    "followMePages": 1,\n    "followMeTime": 0,\n    "timeInQueue": 0,\n    "availabilityPolicy": 0,\n    "conversationType": 1,\n    "connectorId": 4461573132,\n    "allowUnauthMsg": false,\n    "skillId": null,\n    "skillName": null,\n    "viewErrors": 0,\n    "subType": 24\n}';

  var jsonData = JSON.parse(postData);
  jsonData.windowId = site.windowId;
  jsonData.onsiteLocations[0] = site.onsiteLocaitonId;
  jsonData.visitorBehaviors[0] = site.visitorBehavior;
  jsonData.connectorId = site.connectorId;
  postData = JSON.stringify(jsonData);

  req.write(postData);

  req.end();

  res.status(200);
});

app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

process.on("SIGINT", function () {
  process.exit();
});

module.exports = app;

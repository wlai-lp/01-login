// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );

  let newSite = {};

  async function getBearer(account, vep){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");    
    
    var raw = JSON.stringify({
      "username": "authagent",
      "password": "P@ssword1!"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    await fetch("https://"+ vep + "/api/account/" + account + "/login?v=1.3", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        var jsonData = JSON.parse(result);
        var result = jsonData.bearer;
        console.log("bearer = " + result);
        return result;
      })
      .catch(error => console.log('error', error));
  }

  async function getVep(account){    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    return await fetch("https://api.liveperson.net/api/account/" + account + "/service/baseURI?version=1.0", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        var jsonData = JSON.parse(result);
        var baseURIs = jsonData.baseURIs;
        var result = baseURIs.find(entry => entry.service == "agentVep").baseURI;
        console.log("vep = " + result);
        return result;
      })
      .catch(error => console.log('error', error));
  }

  (async() => {
    newSite.account = 25754758;
    newSite.vep = await getVep(newSite.account);
    console.log("🚀 ~ file: newsite.js ~ line 57 ~ newSite.vep", newSite.vep)
    newSite.bearer = await getBearer(newSite.account, newSite.vep);
    console.log("async");
  })();

});
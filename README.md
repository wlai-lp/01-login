# TL;DR
this is for code flow, WIP

these codes are 1 time use only, right after you sign in using the sdk, it redeem the code to get userprofile for the avator
you can see it is used in the log, so when the same code was passed back to LP, LP couldn't use it
again you can see it in the auth0 log

so the way around it is right after initial code return, we can do another signin to get code using the url post from server

the way sdk works is it redeem th

## run in docker
//docker run --init -p 3000:3000 -it citionecent/lp-auth:1.0.0

open browser to
http://localhost:3000/?site=90412079

replace site with your lpsite that has an authenticated engagement




# notes
https://auth0.com/docs/authenticate/login/oidc-conformant-authentication/oidc-adoption-auth-code-flow#code-exchange-request-authorization-code-flow
// tried the manual curl from the doc using the code returned, also failed, maybe it's a 1 time use code only?
// yeah i was right, it's

// LP does work, there are the log from auth0, lp one does not have, username
//this works from the webapp
// who is amking this authorization code for access token
{
  "date": "2022-11-06T22:56:52.981Z",
  "type": "seacft",
  "description": "Authorization Code for Access Token",
  "connection_id": "",
  "client_id": "HsTQCESWlE0rXsNW8rWojAlks5kH7Ss5",
  "client_name": "lp-guide",
  "ip": "173.48.207.184",
  "user_agent": "Chrome 107.0.0 / Windows 10.0.0",
  "details": {
    "code": "******************************************PDH"
  },
  "hostname": "dev-ebsf4fc7.us.auth0.com",
  "user_id": "auth0|635597736bfc2845ff3ab940",
  "user_name": "wlai+oauth@liveperson.com",
  "auth0_client": {
    "name": "auth0-spa-js",
    "version": "2.0.0"
  },
  "log_id": "90020221106225657127344338174467560571679411426601992274",
  "_id": "90020221106225657127344338174467560571679411426601992274",
  "isMobile": false,
  "id": "90020221106225657127344338174467560571679411426601992274"
}

// this failed on lp side
{
  "date": "2022-11-06T22:57:51.623Z",
  "type": "feacft",
  "description": "Invalid authorization code",
  "connection_id": "",
  "client_id": "HsTQCESWlE0rXsNW8rWojAlks5kH7Ss5",
  "client_name": "lp-guide",
  "ip": "208.89.12.137",
  "user_agent": "Java 8.0.322 / Other 0.0.0",
  "details": {
    "code": "******************************************PDH"
  },
  "hostname": "dev-ebsf4fc7.us.auth0.com",
  "user_id": "",    // missing user id...
  "user_name": "",  // missing user_name...
  "log_id": "90020221106225756078145807643147567630596696826003324994",
  "_id": "90020221106225756078145807643147567630596696826003324994",
  "isMobile": true,
  "id": "90020221106225756078145807643147567630596696826003324994"
}
















# Sample 01 - Login

The purpose of this article is to demonstrate how simple it is to set up and use the new Single Page Application SDK, and authenticate a user in your application using Auth0's Universal Login Page.

## Running the Sample Application

The sample can be run locally, by cloning the repository to your machine and then following the steps below.

### Specifying Auth0 Credentials

To specify the application client ID and domain, make a copy of `auth_config.json.example` and rename it to `auth_config.json`. Then open it in a text editor and supply the values for your application:

```json
{
  "domain": "dev-ebsf4fc7.us.auth0.com",
  "clientId": "HsTQCESWlE0rXsNW8rWojAlks5kH7Ss5"
}
```

### Installation

After cloning the repository, run:

```bash
$ npm install
```

This will install all of the necessary packages in order for the sample to run.

### Running the Application

This version of the application uses an [Express](https://expressjs.com) server that can serve the site from a single page. To start the app from the terminal, run:

```bash
$ npm run dev
```

## Frequently Asked Questions

We are compiling a list of questions and answers regarding the new JavaScript SDK - if you're having issues running the sample applications, [check the FAQ](https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md)!

## What is Auth0?

Auth0 helps you to:

- Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
- Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
- Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
- Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.


## Reference
TODO: use auth0 action to add custom claims
https://auth0.com/blog/adding-custom-claims-to-id-token-with-auth0-actions/

## action works and it added a custom claim

## autenticated engagement should load
- now it loads on the main / page
- ideally we want to loan it in the profile page
- it's a SPA so we need to use refresh when naviagate to /profile page
- so far it's working with some customer info mapped
- use auth0 action to add custom claims
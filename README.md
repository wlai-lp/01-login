# TL;DR
## run in docker
docker run --init -p 3000:3000 -it citionecent/lp-auth

open browser to
http://localhost:3000/?site=90412079

replace site with your lpsite that has an authenticated engagement

# Branches
## master - i am abandoning this because the 2 branches below
## lp-implicit - working webapp with lp-implicit idp config
## lp-code - WIP


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
# parse-server-crud

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Set environment variables in `index.js`
- `npm run start` to start the local server with nodemon
- `npm run server` to start the local server without nodemon

## Dependencies

- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js.
- [kerberos](https://www.npmjs.com/package/kerberos) - The kerberos package is a C++ extension for Node.js that provides cross-platform support for kerberos authentication using GSSAPI on linux/osx, and SSPI on windows. Much of the code in this module is adapted from ccs-kerberos and winkerberos.
- [parse](https://www.npmjs.com/package/parse) - A library that gives you access to the powerful Parse Server backend from your JavaScript app.
- [parse-server](https://www.npmjs.com/package/parse-server) - Parse Server is an open source backend that can be deployed to any infrastructure that can run Node.js.

## Application Structure

- `cloud/main` - The entry point to our application. This file defines our requests.
- `cloud/controllers` - This folder contains entry point's functions.
# Code-Snippers

## About this project

Save your code snippets and share them.

## Tech Stack to be used

1. [x] Serverless Architecture
   1. [x] Frontend Frameworks
      1. [x] NEXTjs
      2. [x] TailwindCSS
   2. [x] Serverless Functions
      1. [x] NEXT's inbuilt api feature with Vercel
   3. [x] Database & API
      1. [x] FaunaDB
   4. [x] Authentication Provider
      1. [x] Auth0

## Features to be added

- [x] Auth
- [x] Dark Mode 🌚
- [ ] Convert code to your favourite IDE snippets

## Running Locally

1. Install the app
   - Run `yarn` or `npm i -g yarn && yarn` (if you don't have yarn installed)
2. Setup local dev env

   - Run `cp .env.local.example .env.local`

3. Create a free Fauna account here at [FaunaDB](https://www.fauna.com).

   - Create a new Database
   - Create a new collection named "snippets"
   - Create an index `snippets_by_user` (name) `data.userId` (terms)
   - Go to Security Tab and get a new server key
     - Add the server key as FAUNA_SECRET=`<your_server_key>` in .env.local file

4. Create a free Auth0 account here at [Auth0](https://auth0.com/)
   - Create a new tennant (Auth0 walks you through the process)
   - Go to applications tab and create a new application
     - Select Regular Web Applications
     - Goto you application dashboard and set env as:
       - AUTH0_ISSUER_BASE_URL as Domain.
       - AUTH0_CLIENT_ID as Client Id
       - AUTH0_CLIENT_SECRET as Client Secret
       - Set a long random string as AUTH0_SECRET.
5. Start the local dev build
   - Run `yarn dev`

<p align="left" >
  <img width="240"  src="public/icAcademy.png">
</p>

# Internet Computer + Alpine.js + Vite

This template is intended to make it easier for you to get started with development on the Internet Computer with Alpine.js and Vite. Alpine.js is a rugged, minimal tool for composing behavior directly in your markup.

Alpine.js is designed to be used directly in your HTML, which means you don't need to set up a complex build process or learn a new templating language. This makes it a great choice for simple tasks and tools, or for adding interactivity to existing static sites.

To clone and use the Github repository for your own purpose following the commands below. 

**Note** to get a clean git repository. A tool called “digit” is used. Make sure you have it installed. If you haven't installed it yet, you can do so using the following command.

```bash
npm install -g degit
```

Summary of installation steps:
1. Check needed tools
2. Install and discuss the github repository
3. Start a local Internet Computer replica
4. Deploy frontend and backend canister to local replica
5. Test the Motoko backend sayHelloTo function


```bash
mkdir myapp && cd myapp
npx degit https://github.com/samlinux-development/ic-alpinejs
npm install
dfx start --clean --background
dfx deploy 
echo http://$(dfx canister id frontend).localhost:4943
```
Open your browser and use the following URL scheme:

- http://[canisterId].localhost:4943
- e.g. http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943

Check the sayHelloTo function with the CLI cammand below:
```bash
dfx canister call backend sayHelloTo '("Roland")'
```

## Deploying to the playground
To test your dApp under the Internet Computer's environment, you can deploy it to the Motoko Playground.

```bash
dfx deploy --playground
```

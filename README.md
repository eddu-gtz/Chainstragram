# Chainstragram App
Blockchain App for post images powered by Ethereum

## Installing Dependencies
Make sure you have instaled the previous instalations in you computer

⋅⋅* Git
⋅⋅* Node.JS
⋅⋅* Truffle Framework - This app was deployed on version 5.1.39
``` console
npm install --g truffle@5.1.39
```
⋅⋅* Ganache Personal Blockchain
⋅⋅* Metamask Ethereum Wallet

###### Advice before running the commands
Make sure you have set up your account in Metamask.

## Installing and Running
Run the next commands on Git Bash
***

``` console
git clone https://github.com/eddu-gtz/Chainstragram.git
cd /Chainstragram
```

###### Install all dependencies
After install all dependencies, we can make a test of the smart contract and check if all is correct, then we just need to reset the smart contract for be deployed in your computer.

``` console
npm install
truffle test
truffle migrate --reset
```
***

## Things you should check

Fisrt of all open Ganache app and click on "QUICKSTART".
![Start host:port](/screenshots/ganache-start.jpg)

#### Truffle-config.js:
Once start Ganache, make sure that host:port matches with the ones on both truffle-config.js.

```javascript
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", /*Ganache RCP server*/
      port: 7545,       /*Port server*/
      network_id: "*" // Match any network id
    },
```

![Ganache host:port](/screenshots/ganache_hostport.jpg)

#### Add the Ganache network to MetaMask

Open Metamask Browser extension and click on networks, and click on "personalize RCP"

![Metamask host:port](/screenshots/network-metamask-1.png)

Then enter the following data.  

![Network host:port](/screenshots/network-metamask-2.png)

---

## Running the aplication

Run the next command on Git Bash to start a server with the application

``` console
npm run start
```

##### Import an account of Ganache and notice the account (upper right section of Metamask) matches with the one on Ganache

To import an account, simply click the wrench icon in an account address.

![Key host:port](/screenshots/ganache-account.jpg)

Then copy the *private key* of the account.

![Account host:port](/screenshots/account.jpg)

Go to metamask and click on import account.

![Import host:port](/screenshots/import.png)

Paste the private key

![Keypaste host:port](/screenshots/key.png)

Finally you would see the next page.

![Chainstragram host:port](/screenshots/chainstragram.jpg)

---

And that's it, enjoy the application

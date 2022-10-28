# Capstone-RealEstate-Project

In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

Dependencies Used:
Truffle v5.6.3 (core: 5.6.3)
Ganache v7.4.4
Solidity v0.5.16 (solc-js)
Node v14.10.1
Web3.js v1.7.4

Steps to take:

Clone this reposity:
git clone https://github.com/aprilNH7/Capstone-RealEstate-Project.git

Cd into the project directory & install dependencies needed:
npm install

Cd into contract directory "eth-contracts":
cd eth-contracts

Develop, Compile, & Migrate the contracts:
npx truffle develop
compile
migrate --reset

Cd into test folder:
cd test

Test to make sure project is running correctly:
npx truffle test

OR

Test to make sure independent contracts are working correctly:
npx truffle test TestERC721Mintable.js
npx truffle test TestSquareVerifier.js
npx truffle test TestSolnSquareVerifier.js

Minted Tokens:
https://goerli.etherscan.io/address/0x5aF6B92FBB9d816D1fC218c7bfccc0cb144a9B16

Contract ABI's:
Verifier: ./eth-contracts/build/contracts/Verifier.json
SolnSquareVerifier: ./eth-contracts/build/contracts/SolnSquareVerifier.json

Contract Addresses:
SolnSquareVerifier: https://goerli.etherscan.io/address/0x67c0fdbee7f53a3580cd3f8e21d59dd8afb26e7b
Verifier: https://goerli.etherscan.io/address/0x8c0aa71cca9aa8EBCfDcCB482A8C2b248E7a150e

OpenSea Token Collection:
https://testnets.opensea.io/collection/coblxck






# Capstone-RealEstate-Project

In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

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

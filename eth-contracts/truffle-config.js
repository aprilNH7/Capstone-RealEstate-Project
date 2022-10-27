const HDWallet = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
             return new HDWallet("access jaguar undo clock type jaguar rookie exist device gospel client verb", "https://rinkeby.infura.io/v3/51b1d4e0773d4ac98a9ac874e96bfa04")
        },
         network_id: '4',
         gas: 4500000,
         gasPrice: 10000000000,
    },
    compilers: {
      solc: {
        version: "0.5.0",
      }
    }
  }
};

const HDWallet = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: function() {
             return new HDWallet("access jaguar undo clock type jaguar rookie exist device gospel client verb", "https://goerli.infura.io/v3/364023ba924e455593481a0acb145b55");
        },
         network_id: '5',
         gas: 15500000,
         gasPrice: 300000000000,
    },
    compilers: {
      solc: {
        version: "0.5.16",
      }
    }

  }
};

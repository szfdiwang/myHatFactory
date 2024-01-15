require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    platondev: {
      url: `https://devnet2openapi.platon.network/rpc`,
      chainId: 2206132,
      blockGasLimit: 9000000,
      gas: 9000000,
      gasPrice: 8000000000,
      allowUnlimitedContractSize: true,
      accounts: [ '3c55c540dbc426e13ddd02833af8e6e57861af89ac5f89f6fb5982de0e068b66' ]
    },
  }
};

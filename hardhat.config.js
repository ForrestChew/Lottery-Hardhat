require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: '0.8.12',
  networks: {
    forking: {
      url: process.env.ALCHEMY_PROVIDER_FORKING,
      blockNumber: 14246004,
    },
    rinkeby: {
      url: process.env.ALCHEMY_PROVIDER_RINKEBY,
      accounts: [process.env.PRIVATE_KEY],
    },
    kovan: {
      url: process.env.ALCHEMY_PROVIDER_KOVAN,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_TOKEN,
  },
};

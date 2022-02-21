const hre = require('hardhat');

async function main() {
  const tokenName = 'MyTokenRinkeby';
  const tokenSymbol = 'MTR';
  const lotteryAddress = '0x6980f572eC5ED55E66d382eA2A19AaFcF1EE8733';
  const Lotty = await hre.ethers.getContractFactory('Lotty');
  const lotty = await Lotty.deploy(tokenName, tokenSymbol, lotteryAddress);
  await lotty.deployed();
  console.log('Token deployed to:', lotty.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

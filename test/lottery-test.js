const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Lottery', () => {
  it('Should deploy lottery contract instance', async () => {
    const owner = '0x34bb840Ff53d5e35249d63d3fA42dac1E08E536D';
    const aggregatorV3Interface = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e';
    const linkTokenRinkeby = '0x01BE23585060835E02B77ef475b0Cc51aA1e0709';
    const vrfCoordinator = '0x6168499c0cFfCaCD319c818142124B7A15E857ab';
    const keyHash =
      '0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc';
    const callbackGasLimit = 100000;
    const requestConfirmations = 3;
    const numWords = 2;
    const vrfSubscriptionId = 271;
    const Lottery = await ethers.getContractFactory('Lottery');
    const lottery = await Lottery.deploy(
      owner,
      aggregatorV3Interface,
      linkTokenRinkeby,
      vrfCoordinator,
      vrfSubscriptionId,
      callbackGasLimit,
      numWords,
      requestConfirmations,
      keyHash
    );
    await lottery.deployed();
    assert(lottery.address !== undefined);
  });
});

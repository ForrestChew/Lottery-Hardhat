const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Lotty Token', () => {
  it('Should deploy token contract instance', async () => {
    const tokenName = 'MyTokenTest';
    const tokenSymbol = 'MyTokenSymbol';
    // Address does not need to point to anything specific to test deployment
    const lotteryAddress = '0x0000000000000000000000000000000000000000';
    const Lotty = await ethers.getContractFactory('Lotty');
    const lotty = await Lotty.deploy(tokenName, tokenSymbol, lotteryAddress);
    await lotty.deployed();
    assert(lotty.address !== '');
  });
});

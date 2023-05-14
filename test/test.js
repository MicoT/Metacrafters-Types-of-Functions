const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RedDiamond", function () {
  let RedDiamond;
  let redDiamond;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    RedDiamond = await ethers.getContractFactory("RedDiamond");
    [owner, addr1, addr2] = await ethers.getSigners();

    redDiamond = await RedDiamond.deploy();
    await redDiamond.deployed();
  });

  it("Should have correct name and symbol", async function () {
    expect(await redDiamond.name()).to.equal("RedDiamond");
    expect(await redDiamond.symbol()).to.equal("RED");
  });

  it("Should mint and burn tokens", async function () {
    await redDiamond.mint(addr1.address, 100);
    expect(await redDiamond.balanceOf(addr1.address)).to.equal(100);

    await redDiamond.burn(50);
    expect(await redDiamond.balanceOf(addr1.address)).to.equal(50);
  });

  it("Should allow only owner to mint and burn", async function () {
    await expect(redDiamond.connect(addr1).mint(addr1.address, 100)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );

    await expect(redDiamond.connect(addr1).burn(50)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );

    await redDiamond.mint(addr1.address, 100);
    await expect(redDiamond.connect(addr1).burn(100)).to.be.revertedWith(
      "Ownable: caller is not the owner"
    );
  });

  it("Should receive Ether", async function () {
    const amount = ethers.utils.parseEther("1.0");
    await expect(() => owner.sendTransaction({ to: redDiamond.address, value: amount }))
      .to.changeEtherBalance(owner, amount);
  });
});

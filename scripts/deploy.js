const { ethers, upgrades } = require("hardhat");

async function main() {
  // Get the contract factory and deploy the RedDiamond contract
  const RedDiamond = await ethers.getContractFactory("RedDiamond");
  const redDiamond = await upgrades.deployProxy(RedDiamond, [], { initializer: "initialize" });

  // Wait for the contract to be deployed and get the deployed address
  await redDiamond.deployed();
  console.log("RedDiamond contract deployed to:", redDiamond.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

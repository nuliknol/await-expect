const hre = require("hardhat");

async function main() {

  const sample = await hre.ethers.deployContract("Sample");

  await sample.waitForDeployment();

  console.log(
    `Sample addr: ${sample.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

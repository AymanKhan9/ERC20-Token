const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(1000000); // 1,000,000 tokens

  await myToken.deployed(); // ✅ v5 syntax

  console.log("✅ MyToken deployed to:", myToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require("hardhat");
const { deploy } = hre.deployments;

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Gnaira = await deploy("Gnaira", {
    from: deployer.address,
    log: true,
  });

  console.log("Gnaira contract deployed to:", Gnaira.address);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
    console.error(error);
    process.exit(1);
  });

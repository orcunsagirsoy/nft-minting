require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/0YJNZN1FusCXfCjzdAxPp1oRV60NDN3J",
      accounts: ["4fa6c2e75da274e014ff66e8e8ea1df755b443283d95d07673eb680c1ea8f32e"]
    },
  },
};

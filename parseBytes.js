const ethers = require("ethers");

const createBytes = async (args) => {
  const bytes = args[0];
  const name = ethers.utils.parseBytes32String(bytes);
  console.log("WinnerName:", name);
};

createBytes(process.argv.slice(2));

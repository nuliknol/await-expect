const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Sample", function () {
  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Sample = await ethers.getContractFactory("Sample");
    const sample = await Sample.deploy();

    return { sample };
  }

  describe("Deployment", function () {
    it("Should not pass the test 1", async function () {
      const { sample } = await loadFixture(deployFixture);

      expect(await sample.method()).to.be.revertedWith("You can't run me");
    });
    it("Should not pass the test 2", async function () {
      const { sample } = await loadFixture(deployFixture);

      await expect(sample.method()).to.be.revertedWith("You can't run me");
    });

  });
});

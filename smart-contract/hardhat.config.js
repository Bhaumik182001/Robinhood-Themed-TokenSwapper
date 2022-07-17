require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: '.env'})

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/0rECRYGNzam6PuB6PJ1lHmpnMXnh0KJV",
      accounts: ['5bfb82eeb277b2812933cf5f1e28fcd5e750600b7c675aabfcb5d0285402bee3'],
    },
  },
};

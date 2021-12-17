const axios = require('axios');
module.exports = {
  eleventyComputed: {
        openSea: async data => {
        let api = `https://api.opensea.io/api/v1/asset/${data.contractAddress}/${data.tokenId}/`
        let response = (await axios.get(api));
        return response.data;
    },
  }
};
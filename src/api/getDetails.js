const api = require('./api');

const getDetails = itemId => {
  const URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  const endPoint = `${URL}/collection/${itemId}?key=${API_KEY}&format=json`;

  return api(endPoint)
    .then(res => {
      const { artObject } = res;
      const {
        objectNumber,
        title,
        description,
        hasImage,
        longTitle,
        subTitle,
        principalMaker,
        webImage,
        dating,
      } = artObject;
      const result = Object.assign(
        {},
        {
          id: objectNumber,
          title,
          description,
          hasImage,
          webImage: {
            guid: webImage?.guid,
            height: webImage?.height,
            url: webImage?.url,
            width: webImage?.width,
          },
          longTitle,
          subTitle,
          principalMaker,
          presentingDate: dating?.presentingDate,
        },
      );
      return result;
    })
    .then(r => r)
    .catch(error => console.error('Error calling service', error));
};

module.exports = getDetails;

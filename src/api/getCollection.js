const api = require('./api');

const getCollection = (search, page = 1) => {
  const RESULTS_PER_PAGE = process.env.RESULTS_PER_PAGE;
  const URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  const endPoint = `${URL}/collection?key=${API_KEY}&q=${search}&format=json&ps=${RESULTS_PER_PAGE}&p=${page}`;

  return api(endPoint)
    .then(res => {
      const { count, artObjects } = res;
      const result = Object.assign(
        {},
        {
          count: count,
          artObjects: artObjects.map(
            ({
              hasImage,
              headerImage,
              objectNumber,
              longTitle,
              principalOrFirstMaker,
              title,
            }) => ({
              hasImage: hasImage,
              headerImage: {
                guid: headerImage.guid,
                height: headerImage.height,
                url: headerImage.url,
                width: headerImage.width,
              },
              id: objectNumber,
              longTitle,
              principalOrFirstMaker,
              title,
            }),
          ),
        },
      );
      return result;
    })
    .then(r => r)
    .catch(error => console.error('Error calling service', error));
};

module.exports = getCollection;

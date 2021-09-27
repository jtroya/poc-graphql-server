const { RESTDataSource } = require('apollo-datasource-rest');

class ArtworkAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL;
    this.resultsPerPage = process.env.RESULTS_PER_PAGE;
    this.apiKey = process.env.API_KEY;
  }

  async getCollection(search, page = 1) {
    try {
      const endPoint = `${this.baseURL}/collection?key=${this.apiKey}&q=${search}&format=json&ps=${this.resultsPerPage}&p=${page}`;
      const response = await this.get(endPoint);
      const { count, artObjects } = response;

      return Object.assign(
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
    } catch (error) {
      throw new Error(`Error searching: ${search} `, error);
    }
  }

  async getDetails(itemId) {
    try {
      const endPoint = `${this.baseURL}/collection/${itemId}?key=${this.apiKey}&format=json`;
      const response = await this.get(endPoint);
      const { artObject } = response;
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

      return Object.assign(
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
    } catch (error) {
      throw new Error(`Error getting details of id: ${itemId} `, error);
    }
  }
}

module.exports = ArtworkAPI;

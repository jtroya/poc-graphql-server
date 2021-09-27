const Query = {
  async search(_parent, args, { dataSources }) {
    try {
      const res = await dataSources.artworkAPI.getCollection(
        args.query,
        args.page,
      );
      return res;
    } catch (error) {
      throw Error('Error searching', error);
    }
  },
  async artworkDetails(_parent, args, { dataSources }) {
    try {
      const res = await dataSources.artworkAPI.getDetails(args.id);
      return res;
    } catch (error) {
      throw Error('Error getting details', error);
    }
  },
};

module.exports = Query;

# GraphQL Server - Proof of concept

This project is an exercise to create a GraphQL Server using an exiting API
REST. This server is using Apollo Server. Actually, due to the scope of the API,
it is only possible to run queries on this server.

## Installation

Use npm to install the dependencies.

```bash
npm install
```

## Requirements

This project requires to run:

- NodeJS version `14.16.0`
- NPM version `6.14.11`
- API Key from Rijksmuseum.
  - To run the search create an account in
    [Rijks Data](https://data.rijksmuseum.nl/object-metadata/api/).
  - Add it in .env.local file, in the field `API_KEY`.

In the project directory, you can run:

- Development mode: `npm run dev`
- Production mode: `npm start`

The app runs with default port `4000` in the development mode.\
Open `http://localhost:4000` in the browser to use Playground.

## License

[MIT](https://github.com/jtroya/poc-graphql-server/blob/master/LICENSE)

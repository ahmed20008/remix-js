import client, { gql } from "../utils/lib/apolloClient";

export const fetchLocations = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        locations(page: 1) {
          results {
            id
            name
            type
            dimension
            residents {
              id
              name
              status
              species
              gender
              image
            }
          }
        }
      }
    `,
  });
  return data.locations.results;
};

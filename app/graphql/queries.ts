import { gql } from "@apollo/client/index.js";

export const GET_LOCATIONS = gql`
  query GetLocations($page: Int, $filter: LocationFilter) {
    locations(page: $page, filter: $filter) {
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
`;

export const FILTER_LOCATIONS = gql`
  query FilterLocations($type: String, $dimension: String) {
    locations(filter: { type: $type, dimension: $dimension }) {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

export const GET_RESIDENT_DETAILS = gql`
  query GetResidentDetails($residentId: ID!) {
    character(id: $residentId) {
      id
      name
      status
      species
      gender
      image
    }
  }
`;

export const GET_LOCATION_STATISTICS = gql`
  query GetLocationStatistics($locationId: ID!) {
    location(id: $locationId) {
      residents {
        alive {
          id
        }
        dead {
          id
        }
        currentGuests {
          id
        }
        speciesStats {
          robots
          aliens
          humans
        }
      }
    }
  }
`;

export const PAGINATED_LOCATIONS = gql`
  query PaginatedLocations($page: Int = 1) {
    locations(page: $page) {
      results {
        id
        name
        type
        dimension
      }
      info {
        next
        prev
      }
    }
  }
`;

import React from "react";
import Card from "~/components/molecules/Card";

interface Resident {
  id: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
}

export interface Location {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Resident[];
}

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const description = `Type: ${location.type} | Dimension: ${location.dimension}`;
  const footerContent = `Residents: ${location.residents.length}`;

  return (
    <Card
      title={location.name}
      description={description}
      imageSrc={location.residents[0]?.image || ""}
      imageAlt={location.name}
      footerContent={footerContent}
      onClick={() => {}}
    />
  );
};

export default LocationCard;

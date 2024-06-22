import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre();

  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find((p) => p.id == gameQuery.platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;

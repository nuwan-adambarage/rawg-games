import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePLatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((p) => p.gameQuery.platformId);
  const platform = usePLatform(selectedPlatformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;

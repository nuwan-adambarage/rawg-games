import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import GameDefinition from "./GameDefinition";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <GameDefinition term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Metascore">
        <CriticScore score={game.metacritic} />
      </GameDefinition>
      <GameDefinition term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </GameDefinition>
      <GameDefinition term="Publishers">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </GameDefinition>
    </SimpleGrid>
  );
};

export default GameAttributes;

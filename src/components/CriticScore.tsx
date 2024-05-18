import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? "green" : score > 65 ? "yellow" : "";
  return (
    <Badge borderRadius={6} colorScheme={color} fontSize={"14px"} paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;

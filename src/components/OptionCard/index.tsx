import { User, Briefcase, Check } from "lucide-react";

import {
  Card,
  Left,
  Label,
  Check as CheckContainer,
} from "./styles";

type Props = {
  type: "personal" | "business";
  selected?: boolean;
  onClick?: () => void;
};

export default function OptionCard({
  type,
  selected,
  onClick,
}: Props) {
  const isPersonal = type === "personal";

  return (
    <Card
      selected={selected}
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.99,
      }}
      onClick={onClick}
    >
      <Left>
        {isPersonal ? (
          <User
            size={18}
            color={selected ? "#0B5FFF" : "#102A43"}
          />
        ) : (
          <Briefcase
            size={18}
            color={selected ? "#0B5FFF" : "#102A43"}
          />
        )}

        <Label selected={selected}>
          {isPersonal ? "Personal" : "Business"}
        </Label>
      </Left>

      {selected && (
        <CheckContainer>
          <Check size={14} />
        </CheckContainer>
      )}
    </Card>
  );
}
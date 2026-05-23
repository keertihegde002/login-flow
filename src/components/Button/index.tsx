import { StyledButton } from "./styles";

type Props = {
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  secondary,
  onClick,
}: Props) {
  return (
    <StyledButton
      secondary={secondary}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
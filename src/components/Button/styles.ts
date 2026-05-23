import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledButton = styled(motion.button)<{
  secondary?: boolean;
}>`
  width: 170px;
  height: 52px;
  border-radius: ${({ theme }) => theme.radius.pill};

  border: ${({ secondary, theme }) =>
    secondary
      ? `1px solid ${theme.colors.border}`
      : "none"};

  background: ${({ secondary, theme }) =>
    secondary
      ? theme.colors.white
      : theme.colors.primary};

  color: ${({ secondary, theme }) =>
    secondary
      ? theme.colors.primary
      : theme.colors.white};

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }

  &:active {
    transform: scale(0.98);
  }
`;
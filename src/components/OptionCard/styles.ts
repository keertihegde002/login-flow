import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)<{
  selected?: boolean;
}>`
  width: 100%;
  height: 80px;

  border-radius: 16px;

  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: white;

  border: 1px solid
    ${({ selected, theme }) =>
      selected
        ? theme.colors.primary
        : theme.colors.border};

  box-shadow: ${({ theme }) => theme.shadows.card};

  cursor: pointer;

  transition: all 0.2s ease;

  ${({ selected }) =>
    selected &&
    css`
      transform: translateY(-1px);
    `}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Label = styled.p<{ selected?: boolean }>`
  font-size: 15px;
  font-weight: 600;

  color: ${({ selected, theme }) =>
    selected
      ? theme.colors.primary
      : theme.colors.textPrimary};
`;

export const Check = styled.div`
  width: 22px;
  height: 22px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;

  font-size: 12px;
`;
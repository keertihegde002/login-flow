import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 4px;

  background: #e5e7eb;

  border-radius: 999px;

  overflow: hidden;

  margin-bottom: 40px;
`;

export const Fill = styled.div<{
  progress: number;
}>`
  width: ${({ progress }) => progress}%;
  height: 100%;

  background: ${({ theme }) =>
    theme.colors.primary};

  transition: width 0.3s ease;
`;
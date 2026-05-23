import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14px;
`;

export const OTPBox = styled.input`
  width: 64px;
  height: 64px;

  border-radius: 16px;

  border: 1px solid
    ${({ theme }) => theme.colors.border};

  text-align: center;

  font-size: 22px;
  font-weight: 600;

  outline: none;

  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary};

    box-shadow: 0px 0px 0px 4px
      rgba(11, 95, 255, 0.1);
  }
`;
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.colors.textSecondary};
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<{
  hasError?: boolean;
}>`
  width: 100%;
  height: 52px;

  border-radius: 12px;

  border: 1px solid
    ${({ hasError, theme }) =>
      hasError
        ? "#ef4444"
        : theme.colors.border};

  padding: 0 16px;

  ${({ type }) =>
    type === "password" &&
    `
      padding-right: 48px;
    `}

  outline: none;

  transition: 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colors.primary};

    box-shadow: 0px 0px 0px 4px
      rgba(11, 95, 255, 0.1);
  }
`;

export const IconWrapper = styled.button`
  position: absolute;

  top: 50%;
  right: 16px;

  transform: translateY(-50%);

  background: transparent;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #6b7280;
`;

export const Error = styled.p`
  color: #ef4444;
  font-size: 13px;
`;
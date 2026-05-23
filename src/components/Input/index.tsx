import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import {
  Error,
  InputWrapper,
  Label,
  StyledInput,
  Wrapper,
  IconWrapper,
} from "./styles";

type Props = {
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  error,
  type = "text",
  onChange,
}: Props) {
  const [showPassword, setShowPassword] =
    useState(false);

  const isPassword =
    type === "password";

  return (
    <Wrapper>
      <Label>{label}</Label>

      <InputWrapper>
        <StyledInput
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          hasError={!!error}
        />

        {isPassword && (
          <IconWrapper
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </IconWrapper>
        )}
      </InputWrapper>

      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}
import { useRef } from "react";

import { Container, OTPBox } from "./styles";

type Props = {
  value: string[];
  onChange: (otp: string[]) => void;
};

export default function OTPInput({
  value,
  onChange,
}: Props) {
  const inputRefs = useRef<
    Array<HTMLInputElement | null>
  >([]);

  const handleChange = (
    digit: string,
    index: number
  ) => {
    if (!/^\d?$/.test(digit)) return;

    const updatedOTP = [...value];

    updatedOTP[index] = digit;

    onChange(updatedOTP);

    if (
      digit &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !value[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Container>
      {value.map((digit, index) => (
        <OTPBox
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          onChange={(e) =>
            handleChange(
              e.target.value,
              index
            )
          }
          onKeyDown={(e) =>
            handleKeyDown(e, index)
          }
        />
      ))}
    </Container>
  );
}
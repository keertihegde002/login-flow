import { Fill, Wrapper } from "./styles";

type Props = {
  currentStep: number;
};

export default function ProgressBar({
  currentStep,
}: Props) {
  const progress =
  currentStep === 0
    ? 0
    : (currentStep / 4) * 100;

  return (
    <Wrapper>
      <Fill progress={progress} />
    </Wrapper>
  );
}
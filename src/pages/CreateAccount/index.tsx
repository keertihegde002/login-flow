import { useState } from "react";

import Button from "../../components/Button";
import OptionCard from "../../components/OptionCard";

import {
  Bottom,
  Card,
  Container,
  Heading,
  HeadingWrapper,
  Illustration,
  LeftSection,
  Options,
  RightSection,
  SmallText,
  Subtitle,
  Title,
} from "./styles";

export default function CreateAccountPage() {
  const [selected, setSelected] = useState<
    "personal" | "business"
  >("personal");

  return (
    <Container>
      <LeftSection>
        <HeadingWrapper>
          <SmallText>Let’s get started</SmallText>

          <Heading>
            Create your
            <br />
            account
          </Heading>

          <Subtitle>
            Follow the steps to create your account
          </Subtitle>
        </HeadingWrapper>

        <Illustration />
      </LeftSection>

      <RightSection>
        <Card>
          <Title>
            To join us tell us what type of account
            <br />
            you are opening
          </Title>

          <Options>
            <OptionCard
              type="personal"
              selected={selected === "personal"}
              onClick={() => setSelected("personal")}
            />

            <OptionCard
              type="business"
              selected={selected === "business"}
              onClick={() => setSelected("business")}
            />
          </Options>

          <Bottom>
            <Button secondary>Back</Button>

            <Button>Continue</Button>
          </Bottom>
        </Card>
      </RightSection>
    </Container>
  );
}
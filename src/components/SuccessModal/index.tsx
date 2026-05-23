import { CircleCheck } from "lucide-react";

import Button from "../Button";

import {
  Modal,
  Overlay,
  Row,
  SecureText,
  Subtitle,
  Summary,
  Title,
} from "./styles";

type Props = {
  values: {
    accountType: string;
    phone: string;
    firstName: string;
    lastName: string;
  };
};

export default function SuccessModal({
  values,
}: Props) {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Modal
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircleCheck
            size={48}
            color="#0B5FFF"
          />
        </div>

        <Title>You’re all set!</Title>

        <Subtitle>
          Here’s a quick summary of your
          account details
        </Subtitle>

        <Summary>
          <Row>
            <span>Account Type</span>

            <strong>
              {values.accountType}
            </strong>
          </Row>

          <Row>
            <span>Name</span>

            <strong>
              {values.firstName}{" "}
              {values.lastName}
            </strong>
          </Row>

          <Row>
            <span>Mobile Number</span>

            <strong>
              {values.phone}
            </strong>
          </Row>
        </Summary>

        <SecureText>
          Your account is secured with
          bank-grade security
        </SecureText>

        <Button>
          Go To Dashboard
        </Button>
      </Modal>
    </Overlay>
  );
}
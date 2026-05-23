import { useState } from "react";

import { Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button";
import Input from "../../components/Input";
import OTPInput from "../../components/OTPInput";
import OptionCard from "../../components/OptionCard";
import ProgressBar from "../../components/ProgressBar";
import SuccessModal from "../../components/SuccessModal";

import { validationSchemas } from "./validation";

import {
  Bottom,
  Card,
  Container,
  Heading,
  HeadingWrapper,
  Illustration,
  LeftSection,
  RightSection,
  SmallText,
  Subtitle,
  Title,
  CountrySelect,
PhoneRow,
} from "./styles";

import type { FormValues } from "./types";

export default function CreateAccountPage() {
  const [step, setStep] = useState(0);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const initialValues: FormValues = {
    accountType: "personal",
    phone: "",
    otp: ["", "", "", ""],
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        validationSchemas[step]
      }
      onSubmit={async (
        values,
        { setSubmitting }
      ) => {
        setSubmitting(true);

        await new Promise((res) =>
          setTimeout(res, 1200)
        );

        setSubmitting(false);

        if (step < 4) {
          setStep(step + 1);
        } else {
          setShowSuccess(true);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
        isSubmitting,
      }) => (
        <>
          <Container>
            <LeftSection>
              <HeadingWrapper>
                <SmallText>
                  Let’s get started
                </SmallText>

                <Heading>
                  Create your
                  <br />
                  account
                </Heading>

                <Subtitle>
                  Follow the steps to create
                  your account
                </Subtitle>
              </HeadingWrapper>

              <Illustration />
            </LeftSection>

            <RightSection>
             <Card as={motion.div}>
                <ProgressBar
                  currentStep={step}
                />
<AnimatePresence mode="wait">
  <motion.div
    key={step}
    initial={{
      opacity: 0,
      x: 20,
    }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    exit={{
      opacity: 0,
      x: -20,
    }}
    transition={{
      duration: 0.25,
    }}
  >
    {step === 0 && (
      <>
        <Title>
          To join us tell us what
          type of account you are
          opening
        </Title>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <OptionCard
            type="personal"
            selected={
              values.accountType ===
              "personal"
            }
            onClick={() =>
              setFieldValue(
                "accountType",
                "personal"
              )
            }
          />

          <OptionCard
            type="business"
            selected={
              values.accountType ===
              "business"
            }
            onClick={() =>
              setFieldValue(
                "accountType",
                "business"
              )
            }
          />
        </div>
      </>
    )}

    {step === 1 && (
      <>
        <Title>
          OTP Verification
        </Title>

        {/* <Input
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={values.phone}
          onChange={handleChange(
            "phone"
          )}
          error={
            touched.phone
              ? errors.phone
              : ""
          }
        /> */}
        <div>
  <p
    style={{
      fontSize: "14px",
      marginBottom: "8px",
      color: "#6B7280",
    }}
  >
    Mobile Number
  </p>

  <PhoneRow>
    <CountrySelect>
      <option>🇮🇳 +91</option>
      <option>🇺🇸 +1</option>
    </CountrySelect>

    <div style={{ flex: 1 }}>
      <Input
        placeholder="Enter mobile number"
        value={values.phone}
        onChange={(e) => {
          const value =
            e.target.value.replace(
              /\D/g,
              ""
            );

          if (value.length <= 10) {
            setFieldValue(
              "phone",
              value
            );
          }
        }}
        error={
          touched.phone
            ? errors.phone
            : ""
        }
      />
    </div>
  </PhoneRow>
</div>
      </>
    )}

    {step === 2 && (
      <>
        <Title>
          Enter OTP
        </Title>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <OTPInput
  value={values.otp}
  onChange={(otp) =>
    setFieldValue("otp", otp)
  }
/>
{errors.otp && (
  <p
    style={{
      color: "#EF4444",
      fontSize: "13px",
      marginTop: "12px",
    }}
  >
    Enter valid OTP
  </p>
)}
<p
  style={{
    marginTop: "20px",
    fontSize: "14px",
    color: "#6B7280",
  }}
>
  Didn’t receive OTP?{" "}
  <span
    style={{
      color: "#0B5FFF",
      cursor: "pointer",
      fontWeight: 600,
    }}
  >
    Resend
  </span>
</p>
        </div>
      </>
    )}

    {step === 3 && (
      <>
        <Title>
          What is your name?
        </Title>

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "20px",
          }}
        >
          <Input
            label="First Name"
            placeholder="Enter first name"
            value={
              values.firstName
            }
            onChange={handleChange(
              "firstName"
            )}
            error={
              touched.firstName
                ? errors.firstName
                : ""
            }
          />

          <Input
            label="Last Name"
            placeholder="Enter last name"
            value={
              values.lastName
            }
            onChange={handleChange(
              "lastName"
            )}
            error={
              touched.lastName
                ? errors.lastName
                : ""
            }
          />
        </div>
      </>
    )}

    {step === 4 && (
      <>
        <Title>
          Create Password for your
          account
        </Title>

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "20px",
          }}
        >
          <Input
            type="password"
            label="Enter new password"
            placeholder="Password"
            value={
              values.password
            }
            onChange={handleChange(
              "password"
            )}
            error={
              touched.password
                ? errors.password
                : ""
            }
          />
          <p
  style={{
    fontSize: "13px",
    color: "#6B7280",
    marginTop: "-10px",
  }}
>
  Must be at least 8 characters
</p>

          <Input
            type="password"
            label="Confirm password"
            placeholder="Confirm password"
            value={
              values.confirmPassword
            }
            onChange={handleChange(
              "confirmPassword"
            )}
            error={
              touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />
          <p
  style={{
    fontSize: "13px",
    color: "#6B7280",
    marginTop: "-10px",
  }}
>
  Both passwords must match
</p>
        </div>
      </>
    )}
  </motion.div>
</AnimatePresence>
                <Bottom>
                  <Button
                    secondary
                    onClick={() => {
                      if (step > 0) {
                        setStep(step - 1);
                      }
                    }}
                  >
                    Back
                  </Button>

                  <Button
                    onClick={() =>
                      handleSubmit()
                    }
                  >
                    {isSubmitting
                      ? "Loading..."
                      : step === 4
                      ? "Finish"
                      : "Continue"}
                  </Button>
                </Bottom>
              </Card>
            </RightSection>
          </Container>

          {showSuccess && (
            <SuccessModal
              values={values}
            />
          )}
        </>
      )}
    </Formik>
  );
}
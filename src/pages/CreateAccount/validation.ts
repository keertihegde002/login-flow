import * as Yup from "yup";

export const validationSchemas = [
  Yup.object({
    accountType: Yup.string().required(),
  }),

  Yup.object({
    phone: Yup.string()
      .matches(
        /^[6-9]\d{9}$/,
        "Enter valid mobile number"
      )
      .required("Mobile number is required"),
  }),

  Yup.object({
  otp: Yup.array()
    .of(
      Yup.string().required()
    )
    .test(
      "complete",
      "Enter valid OTP",
      (value) =>
        value?.every(
          (digit) => digit !== ""
        ) || false
    ),
}),

  Yup.object({
   firstName: Yup.string()
  .trim()
  .min(2, "First name is required")
  .required("First name is required"),

lastName: Yup.string()
  .trim()
  .min(2, "Last name is required")
  .required("Last name is required"),
  }),

  Yup.object({
    password: Yup.string()
      .min(
        6,
        "Password must be at least 6 characters"
      )
      .required(),

    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Passwords must match"
      )
      .required(),
  }),
];
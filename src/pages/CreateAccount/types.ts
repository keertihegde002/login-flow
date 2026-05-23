export type Step =
  | 0
  | 1
  | 2
  | 3
  | 4;

export interface FormValues {
  accountType: "personal" | "business";

  phone: string;

  otp: string[];

  firstName: string;

  lastName: string;

  password: string;

  confirmPassword: string;
}
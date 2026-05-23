## Notes

- The first step contains a back button to match the provided Figma design, although ideally the initial step would not require one.

- The `Send OTP` and `Resend OTP` actions currently do not make actual API calls. In a real production setup, these actions would be connected to backend OTP services.

- The success modal in the Figma design displayed the user's email address. Since the current flow only collects the phone number and not the email, the email field was intentionally omitted.

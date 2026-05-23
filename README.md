## Notes

- The first step contains a back button to match the provided Figma design, although ideally the initial step would not require one.

- From a product perspective, I also feel reducing the number of steps and consolidating the flow into a single form could help reduce user drop-off and make the experience feel less tedious.
  
- The `Send OTP` and `Resend OTP` actions currently do not make actual API calls. In a real production setup, these actions would be connected to backend OTP services.

- The success modal in the Figma design displayed the user's email address. Since the current flow only collects the phone number and not the email, the email field was intentionally omitted.



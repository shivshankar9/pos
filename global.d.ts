export {};

declare global {
  interface Window {
    Razorpay: any; // Replace `any` with a specific type if Razorpay provides TypeScript definitions
  }
}

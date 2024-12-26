// utils/subscriptionCheck.ts
export const checkSubscriptionStatus = async (
  email: string
): Promise<boolean> => {
  // Simulate checking subscription status
  if (email === "shivshankarkumar281@gmail.com") {
    return true; // Subscribed
  } else if (email === "shivshankar4287@gmail.com") {
    return false; // Not subscribed
  }
  return false; // Default to not subscribed
};

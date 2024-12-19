import { cache } from "react";

export type SubscriptionLevel = "free";

export const getUserSubscriptionLevel = cache(
  async (): Promise<SubscriptionLevel> => {
    // Always return "free" as there are no other subscription levels
    return "free";
  }
);

"use server";

// import { env } from "@/env";
import { currentUser } from "@clerk/nextjs/server";

export async function createCheckoutSession() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  // Remove Stripe-specific checkout logic
  throw new Error("Checkout is currently unavailable");
}
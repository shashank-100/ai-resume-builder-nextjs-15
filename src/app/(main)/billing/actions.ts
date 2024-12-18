"use server";

import { env } from "@/env";
import { currentUser } from "@clerk/nextjs/server";

export async function createCustomerPortalSession() {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const stripeCustomerId = user.privateMetadata.stripeCustomerId as
    | string
    | undefined;

  if (!stripeCustomerId) {
    throw new Error("Stripe customer ID not found");
  }

  return `${env.NEXT_PUBLIC_BASE_URL}/billing`
}

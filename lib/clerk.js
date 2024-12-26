"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { usePathname, useSearchParams } from 'next/navigation';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

export const ClerkProviderWrapper = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigate = (to) => {
    const url = new URL(to, window.location.origin);
    url.search = searchParams.toString();
    window.location.href = url.toString();
  };

  return (
    <ClerkProvider frontendApi={clerkFrontendApi} navigate={navigate}>
      {children}
    </ClerkProvider>
  );
};
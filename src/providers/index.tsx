'use client';

import { SessionProvider } from 'next-auth/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ChildrenProps } from '../../@Types/global';

const queryClient = new QueryClient();
const Providers = ({ children }: ChildrenProps) => {
  return (
    <SessionProvider>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NuqsAdapter>
    </SessionProvider>
  );
};

export default Providers;

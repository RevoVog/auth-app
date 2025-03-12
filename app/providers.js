'use client';

import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

export const Auth0Provider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};
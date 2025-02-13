'use client';

import { useSession } from 'next-auth/react';

const Test = () => {
    const { data: session } = useSession();
    console.log('session111', session);

    return <>Asd</>;
};

export default Test;

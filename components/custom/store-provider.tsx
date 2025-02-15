'use client';

import { type PropsWithChildren, useRef } from 'react';
import type { StoreType } from '@/store';
import { initializeStore, Provider } from '@/store';

export interface PreloadedStoreInterface {
    user: {
        id: string;
        image: string;
        name: string;
        email: string;
    };
}

export function StoreProvider({
    children,
    ...props
}: PropsWithChildren<PreloadedStoreInterface>) {
    const storeRef = useRef<StoreType>(null);

    if (!storeRef.current) {
        storeRef.current = initializeStore(props);
    }

    return <Provider value={storeRef.current}>{children}</Provider>;
}

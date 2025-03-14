import { createContext, useContext } from 'react';
import { createStore, useStore as useZustandStore } from 'zustand';
import { PreloadedStoreInterface } from '@/components/custom/store-provider';

export interface StoreInterface {
    user: {
        id: string;
        name: string;
        email: string;
        image: string;
    };
    setUser: ({
        id,
        name,
        email,
        image
    }: {
        id: string;
        name: string;
        email: string;
        image: string;
    }) => void;
}

function getDefaultInitialState() {
    return {
        id: '',
        name: '',
        email: '',
        image: ''
    } as const;
}

export type StoreType = ReturnType<typeof initializeStore>;

const storeContext = createContext<StoreType | null>(null);

export const Provider = storeContext.Provider;

export function useStore<T>(selector: (state: StoreInterface) => T) {
    const store = useContext(storeContext);

    if (!store) throw new Error('Store is missing the provider');

    return useZustandStore(store, selector);
}

export function initializeStore(preloadedState: PreloadedStoreInterface) {
    return createStore<StoreInterface>(set => ({
        ...getDefaultInitialState(),
        ...preloadedState,
        setUser: user =>
            set({
                user
            })
    }));
}

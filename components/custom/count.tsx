'use client';

import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

function useCounter() {
    return useStore(
        useShallow(store => ({
            count: store.count,
            setCount: store.setCount
        }))
    );
}

function Counter() {
    const { count, setCount } = useCounter();
    return (
        <Button
            onClick={() => {
                setCount(count + 1);
                toast({
                    description: 'count is updated!'
                });
            }}
        >
            count is {count}
        </Button>
    );
}

export default Counter;

'use server';

import { signIn } from '@/lib/auth';
import { PATHS } from '@/constants';

const signInWithThird = async (type: string) => {
    await signIn(type, {
        redirectTo: PATHS.SITE_HOME
    });
};

export { signInWithThird };

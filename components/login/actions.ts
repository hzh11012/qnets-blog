'use server';

import { signIn, signOut } from '@/lib/auth';
import { PATHS } from '@/constants';

const signInWithThird = async (type: string) => {
    await signIn(type, {
        redirectTo: PATHS.SITE_HOME
    });
};

const signOutAndRedirect = async () => {
    await signOut({
        redirectTo: PATHS.AUTH_SIGN_IN
    });
};

export { signInWithThird, signOutAndRedirect };

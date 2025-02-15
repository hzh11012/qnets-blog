export const PATHS = {
    /** ************* SITE ****************** */
    SITE_HOME: '/',
    SITE_BLOG: '/blog',
    SITE_SNIPPET: '/snippet',
    SITE_ABOUT: '/about',

    /** ************* ADMIN ****************** */
    ADMIN_HOME: '/admin',

    /** ************* AUTH ****************** */
    AUTH_SIGN_IN: '/login',
    AUTH_VERIFY: '/verify'
};

export const PATHS_MAP: Record<string, string> = {
    /** ************* SITE ****************** */
    [PATHS.SITE_HOME]: '首页',
    [PATHS.SITE_BLOG]: '博客',
    [PATHS.SITE_SNIPPET]: '片段',
    [PATHS.SITE_ABOUT]: '关于',

    /** ************* ADMIN ****************** */
    [PATHS.ADMIN_HOME]: '首页',

    /** ************* AUTH ****************** */
    [PATHS.AUTH_SIGN_IN]: '登录',
    [PATHS.AUTH_VERIFY]: '验证邮件',

    '404': 'Not Found'
};

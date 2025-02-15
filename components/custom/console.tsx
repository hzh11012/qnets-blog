'use client';

import { ASCII_ART_FONT, NICKNAME } from '@/constants';
import { isBrowser } from '@/lib/utils';

const fontFamily =
    'font-family: Poppins, PingFang SC, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";';

(() => {
    if (isBrowser()) {
        // 放到这里执行，保证只输出一次
        console.log(ASCII_ART_FONT);
        console.log(
            `%c作者：${NICKNAME}`,
            `color: #999; font-size: 2rem;${fontFamily}`
        );
    }
})();

const Console = () => {
    return null;
};

export default Console;

import { PATHS, PATHS_MAP } from '@/constants';
import { JSX } from 'react';
import { House, NotebookPen, BookOpenText, Eye } from 'lucide-react';

export const navs: {
    label?: string;
    link: string;
    external?: boolean;
    icon?: JSX.Element;
}[] = [
    {
        label: PATHS_MAP[PATHS.SITE_HOME],
        link: PATHS.SITE_HOME,
        icon: <House size={16} />
    },
    {
        label: PATHS_MAP[PATHS.SITE_BLOG],
        link: PATHS.SITE_BLOG,
        icon: <BookOpenText size={16} />
    },
    {
        label: PATHS_MAP[PATHS.SITE_SNIPPET],
        link: PATHS.SITE_SNIPPET,
        icon: <NotebookPen size={16} />
    },
    {
        label: PATHS_MAP[PATHS.SITE_ABOUT],
        link: PATHS.SITE_ABOUT,
        icon: <Eye size={16} />
    }
];

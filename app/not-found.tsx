import React from 'react';
import StatusCode from '@/components/custom/status-code';
import { type Metadata } from 'next';
import { PATHS_MAP } from '@/constants';

export const metadata: Metadata = {
    title: PATHS_MAP['404']
};

const NotFound: React.FC = () => {
    return <StatusCode />;
};

export default NotFound;

import type { INodeProperties } from 'n8n-workflow';

const showOnlyForReadinessGet = {
        operation: ['get'],
        resource: ['readiness'],
};

export const readinessGetDescription: INodeProperties[] = [
        {
                displayName: 'Start Date',
                name: 'start_date',
                type: 'dateTime',
                displayOptions: { show: showOnlyForReadinessGet },
                default: '',
                description: 'Start date for readiness data (YYYY-MM-DD)',
        },
        {
                displayName: 'End Date',
                name: 'end_date',
                type: 'dateTime',
                displayOptions: { show: showOnlyForReadinessGet },
                default: '',
                description: 'End date for readiness data (YYYY-MM-DD)',
        },
];

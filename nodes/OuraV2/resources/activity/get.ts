import type { INodeProperties } from 'n8n-workflow';

const showOnlyForActivityGet = {
        operation: ['get'],
        resource: ['activity'],
};

export const activityGetDescription: INodeProperties[] = [
        {
                displayName: 'Start Date',
                name: 'start_date',
                type: 'dateTime',
                displayOptions: { show: showOnlyForActivityGet },
                default: '',
                description: 'Start date for activity data (YYYY-MM-DD)',
        },
        {
                displayName: 'End Date',
                name: 'end_date',
                type: 'dateTime',
                displayOptions: { show: showOnlyForActivityGet },
                default: '',
                description: 'End date for activity data (YYYY-MM-DD)',
        },
];

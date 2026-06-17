import type { INodeProperties } from 'n8n-workflow';

export const stressDescription: INodeProperties[] = [
        {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: { show: { resource: ['stress'] } },
                options: [
                        {
                                name: 'Get',
                                value: 'get',
                                action: 'Get daily stress',
                                description: 'Get daily stress levels',
                                routing: {
                                        request: {
                                                method: 'GET',
                                                url: '/v2/usercollection/daily_stress',
                                                qs: {
                                                        start_date: '={{$parameter["start_date"].split("T")[0]}}',
                                                        end_date: '={{$parameter["end_date"].split("T")[0]}}',
                                                },
                                        },
                                },
                        },
                ],
                default: 'get',
        },
        {
                displayName: 'Start Date',
                name: 'start_date',
                type: 'dateTime',
                displayOptions: { show: { resource: ['stress'] } },
                default: '',
                description: 'Start date (YYYY-MM-DD)',
        },
        {
                displayName: 'End Date',
                name: 'end_date',
                type: 'dateTime',
                displayOptions: { show: { resource: ['stress'] } },
                default: '',
                description: 'End date (YYYY-MM-DD)',
        },
];

import type { INodeProperties } from 'n8n-workflow';

export const restModeDescription: INodeProperties[] = [
        {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: { show: { resource: ['restMode'] } },
                options: [
                        {
                                name: 'Get',
                                value: 'get',
                                action: 'Get rest mode periods',
                                description: 'Get periods where Oura detected illness or recovery need',
                                routing: {
                                        request: {
                                                method: 'GET',
                                                url: '/v2/usercollection/rest_mode_period',
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
                displayOptions: { show: { resource: ['restMode'] } },
                default: '',
                description: 'Start date (YYYY-MM-DD)',
        },
        {
                displayName: 'End Date',
                name: 'end_date',
                type: 'dateTime',
                displayOptions: { show: { resource: ['restMode'] } },
                default: '',
                description: 'End date (YYYY-MM-DD)',
        },
];

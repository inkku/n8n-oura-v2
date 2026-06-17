import type { INodeProperties } from 'n8n-workflow';

export const personalInfoDescription: INodeProperties[] = [
        {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: { show: { resource: ['personalInfo'] } },
                options: [
                        {
                                name: 'Get',
                                value: 'get',
                                action: 'Get personal info',
                                description: 'Get personal information for the user',
                                routing: {
                                        request: {
                                                method: 'GET',
                                                url: '/v2/usercollection/personal_info',
                                        },
                                },
                        },
                ],
                default: 'get',
        },
];

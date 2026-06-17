import type { INodeProperties } from 'n8n-workflow';
import { activityGetDescription } from './get';

export const activityDescription: INodeProperties[] = [
        {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: { show: { resource: ['activity'] } },
                options: [
                        {
                                name: 'Get',
                                value: 'get',
                                action: 'Get activity summary',
                                description: 'Get daily activity score and metrics',
                                routing: {
                                        request: {
                                                method: 'GET',
                                                url: '/v2/usercollection/daily_activity',
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
        ...activityGetDescription,
];

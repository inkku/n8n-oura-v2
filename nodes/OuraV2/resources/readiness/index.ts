import type { INodeProperties } from 'n8n-workflow';
import { readinessGetDescription } from './get';

export const readinessDescription: INodeProperties[] = [
        {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: { show: { resource: ['readiness'] } },
                options: [
                        {
                                name: 'Get',
                                value: 'get',
                                action: 'Get readiness summary',
                                description: 'Get daily readiness score and contributors',
                                routing: {
                                        request: {
                                                method: 'GET',
                                                url: '/v2/usercollection/daily_readiness',
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
        ...readinessGetDescription,
];

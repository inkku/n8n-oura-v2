import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { activityDescription } from './resources/activity';
import { personalInfoDescription } from './resources/personalInfo';
import { readinessDescription } from './resources/readiness';

export class OuraV2 implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Oura V2',
                name: 'ouraV2',
                icon: { light: 'file:ouraV2.svg', dark: 'file:ouraV2.dark.svg' },
                group: ['transform'],
                version: 1,
                subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
                description: 'Get health and readiness data from Oura Ring v2 API',
                defaults: {
                        name: 'Oura V2',
                },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [{ name: 'ouraV2OAuth2Api', required: true }],
                requestDefaults: {
                        baseURL: 'https://api.ouraring.com',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
                        {
                                displayName: 'Resource',
                                name: 'resource',
                                type: 'options',
                                noDataExpression: true,
                                options: [
                                        {
                                                name: 'Activity',
                                                value: 'activity',
                                        },
                                        {
                                                name: 'Personal Info',
                                                value: 'personalInfo',
                                        },
                                        {
                                                name: 'Readiness',
                                                value: 'readiness',
                                        },
                                ],
                                default: 'readiness',
                        },
                        ...activityDescription,
                        ...personalInfoDescription,
                        ...readinessDescription,
                ],
        };
}

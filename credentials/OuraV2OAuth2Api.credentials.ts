import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class OuraV2OAuth2Api implements ICredentialType {
        name = 'ouraV2OAuth2Api';
        extends = ['oAuth2Api'];
        displayName = 'Oura V2 OAuth2 API';
        icon = 'file:ouraV2.svg' as const;
        documentationUrl = 'https://cloud.ouraring.com/docs/authentication';
        properties: INodeProperties[] = [
                {
                        displayName: 'Grant Type',
                        name: 'grantType',
                        type: 'hidden',
                        default: 'authorizationCode',
                },
                {
                        displayName: 'Authorization URL',
                        name: 'authUrl',
                        type: 'hidden',
                        default: 'https://cloud.ouraring.com/oauth/authorize',
                },
                {
                        displayName: 'Access Token URL',
                        name: 'accessTokenUrl',
                        type: 'hidden',
                        default: 'https://api.ouraring.com/oauth/token',
                },
                {
                        displayName: 'Scope',
                        name: 'scope',
                        type: 'hidden',
                        default: 'daily',
                },
                {
                        displayName: 'Authentication',
                        name: 'authentication',
                        type: 'hidden',
                        default: 'header',
                },
        ];
}

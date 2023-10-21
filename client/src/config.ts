// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'a0a18mhsfg'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  domain: 'dev-hieu.us.auth0.com',            // Auth0 domain
  clientId: 'NGKgr5c4tbDc17jgojMwqzX7tpHj8Xjr',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}

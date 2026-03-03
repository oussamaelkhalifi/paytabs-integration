// PayTabs configuration — values should come from environment variables
// Create a local .env file or set these in your CI/CD environment:
// PAYTABS_PROFILE_ID, PAYTABS_SERVER_KEY, PAYTABS_CLIENT_KEY
export const CONFIG = {
  PAY_TABS_CONFIG: {
    PROFILE_ID: process.env.PAYTABS_PROFILE_ID || '<YOUR_PAYTABS_PROFILE_ID>',
    SERVER_KEY: process.env.PAYTABS_SERVER_KEY || '<YOUR_PAYTABS_SERVER_KEY>',
    CLIENT_KEY: process.env.PAYTABS_CLIENT_KEY || '<YOUR_PAYTABS_CLIENT_KEY>',
    SUBSCRIPTION_PRICE: 29.99,
  },
};

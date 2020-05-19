(function() {
    const CONTRACT_NAME = 'buildlinks_pool'; /* TODO: fill this in! */
    const DEFAULT_ENV = 'development';
    //15
    const GAS = Math.pow(10,13).toString();

    function getConfig(env) {
        switch (env) {

            case 'production':
            case 'development':
                return {
                    networkId: 'default',                                             // this can be any label to namespace user accounts
                    nodeUrl: "https://rpc.betanet.nearprotocol.com",                          // this endpoint must point to the network you want to reach
                    walletUrl: "https://wallet.betanet.nearprotocol.com",                      // this endpoint must exist for the wallet to work
                    contractName: CONTRACT_NAME,
                    deps: {
                        keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore() // keys are stored as plaintext in LocalStorage
                    }
                };
            case 'staging':
                return {
                    networkId: 'staging',
                    nodeUrl: 'https://staging-rpc.nearprotocol.com/',
                    contractName: CONTRACT_NAME,
                    walletUrl: 'https://near-wallet-staging.onrender.com',
                };
            case 'local':
                return {
                    networkId: 'local',
                    nodeUrl: 'http://localhost:3030',
                    keyPath: `${process.env.HOME}/.near/validator_key.json`,
                    walletUrl: 'http://localhost:4000/wallet',
                    contractName: CONTRACT_NAME,
                };
            default:
                throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
        }
    }

    window.nearConfig =  getConfig(DEFAULT_ENV);
    window.gas = GAS;
})();

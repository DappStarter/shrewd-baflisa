require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift raise machine snow harvest only equal gas'; 
let testAccounts = [
"0x8ef9579b66ca5fe340fb2c2395b585635cee3e4f8fefb247471ae3555abfafcd",
"0xad54ed051d6365c15d6cef31a964d4f2741b1da900bc0f66bf2b045ee96b80d6",
"0x84d319bc6ea71c7c60c703e32b78c0d75f0e8d11a28a31d54cdb0681f44218bf",
"0x48de8bed5adc06bbc0223642111a433a263efdbf62c76ecbc1a470df46946bef",
"0x887de380901987fca4aced39a030d5c631db8ce391879cf799bd3840c4a07c5e",
"0x25892485c8848ff955f454df9f1a72adfdf150827a115a8c0d0e74bd7b7c1c19",
"0x5ea0305b9c5b2bbf9140e3eae360cbdaf8adb5a7c79ec09e9e22d169f5133ada",
"0x6a6c72898a4ed55dcfa6e81e5cda5d96789d15664262301ec9d5fe45be89339d",
"0x94c4e1822b299c958d280382e8f4d0e88b9aa40b083c959efdeac1623775caf3",
"0xd238600e8a79ef89b5c6ebe6493b61170f5fd4448b1a0dce109cd63791dc12de"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

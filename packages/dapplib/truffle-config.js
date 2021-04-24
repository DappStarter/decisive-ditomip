require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain minor inner kiwi fog then'; 
let testAccounts = [
"0x8be9c3835b924e1cb923d15dc86dc364e66a97ff47ec99cd7c6c0352ab9f6d2e",
"0x401dd1779665dbe8e377ef3da2206c87208e937fb8256f80a448ae747eeccc78",
"0xc739ef8c03641aad644a9436c1095417c992e9613e5ce1cb0622669bf03bf909",
"0xdd8a6f1605677b787267d4701e96b9377d067b19af38ed03eccc20b9e87035f4",
"0x326bf3e30036eb817ac5cedef61bb61fc228accf59afbd0d742a5bb2cdfb6e4a",
"0xd4bafff1f227ecacfdb30c199df8de239454189f2416e595634d11c10d9d51a4",
"0xbd620e9088b80c136c78bb57da7926e61a66b1cbb5a74954994771eac506397b",
"0x0ba246e6245fb8560c96ccc8cf1fe4b868b0ad010e7a087b3b9f3b4ae1529a2a",
"0x67c3229da59a3f7b68c3aefd39c2ea7999b3f0151d9905f5395c33167c6d0e56",
"0xfc063c06a7c38f719b719f24adc10e18a95f4a2c3665aa5824d45ac5b57913c2"
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

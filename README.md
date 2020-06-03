# Bitcore

**Infrastructure to build MonetaryUnit and blockchain-based applications for the next generation of financial technology.**

## Getting Started

### Requirements

- Trusted P2P Peer
- MongoDB Server >= v3.4

### Checkout the repo

```sh
git clone git@github.com:muecoin/bitcore.git
cd bitcore
git checkout master
npm install
```

## Setup Guide

### 1. Setup Bitcore config

<details>
<summary>Example bitcore.config.json</summary>
<br>

```json
{
  "bitcoreNode": {
    "chains": {
      "MUE": {
        "mainnet": {
          "chainSource": "p2p",
          "trustedPeers": [
            {
              "host": "127.0.0.1",
              "port": 21102
            }
          ],
          "rpc": {
            "host": "127.0.0.1",
            "port": 20102,
            "username": "RPCUSER",
            "password": "RPCPASS"
          }
        }
      }
    }
  }
}
```

</details>

### 2. Setup MonetaryUnit Node

<details>
<summary><b> Example MonetaryUnit Mainnet Config </b></summary>

```sh
txindex=0
listen=1
server=1

# Make sure port & rpcport matches the 
# bitcore.config.json ports for MUE mainnet

# if using MonetaryUnit Core v5+ prefix
# [main]

port=21102
rpcport=20102

rpcuser=RPCUSER
rpcpassword=RPCPASS
```

</details>

### 3. Run MonetaryUnit node
<details>
<summary><b>Example Starting a MonetaryUnit Node</b></summary>
  
```
# Path to your monetaryunit application and path to the config above
/Applications/MonetaryUnit-Qt.app/Contents/MacOS/MonetaryUnit-Qt -datadir=/Users/username/blockchains/monetaryunit-core/networks/mainnet/
```

</details>

### 4. Start Bitcore

```sh
npm run bootstrap  (if you are using ubuntu 18.04 you will need to do this)
npm run node
```

If you'd like to use Docker go to [the docker manual](https://github.com/muecoin/bitcore/blob/master/Docker.md).

## Applications

- [Bitcore Node](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-node) - A full node with extended capabilities using Bitcoin Core
- [Bitcore Wallet](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-wallet) - A command-line based wallet client
- [Bitcore Wallet Client](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-wallet-client) - A client for the wallet service
- [Bitcore Wallet Service](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-wallet-service) - A multisig HD service for wallets
- [Bitpay Wallet](https://github.com/bitpay/copay) - An easy-to-use, multiplatform, multisignature, secure bitcoin wallet
- [Insight](https://github.com/bitpay/bitcore/tree/master/packages/insight-previous) - A blockchain explorer web user interface

## Libraries

- [Bitcore Channel](https://github.com/bitpay/bitcore-channel) - Micropayment channels for rapidly adjusting bitcoin transactions
- [Bitcore ECIES](https://github.com/bitpay/bitcore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams
- [Bitcore Lib](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-lib) - A pure and powerful JavaScript Bitcoin library
- [Bitcore Lib Cash](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-lib-cash) - A pure and powerful JavaScript Bitcoin Cash library
- [Bitcore Message](https://github.com/bitpay/bitcore-message) - Bitcoin message verification and signing
- [Bitcore Mnemonic](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Bitcore P2P](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-p2p) - The peer-to-peer networking protocol for BTC
- [Bitcore P2P Cash](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-p2p-cash) - The peer-to-peer networking protocol for BCH
- [Crypto Wallet Core](https://github.com/bitpay/bitcore/tree/master/packages/crypto-wallet-core) - A coin-agnostic wallet library for creating transactions, signing, and address derivation

## Extras

- [Bitcore Build](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-build) - A helper to add tasks to gulp
- [Bitcore Client](https://github.com/bitpay/bitcore/tree/master/packages/bitcore-client) - A helper to create a wallet using the bitcore-v8 infrastructure

## Contributing

See [CONTRIBUTING.md](https://github.com/muecoin/bitcore/blob/master/Contributing.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/muecoin/bitcore/blob/master/LICENSE).

Copyright 2013-2019 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

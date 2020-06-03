# Docker
Currently this repo's docker file only supports Bitcore Node & Bitcore Wallet Service (VWS).

## Setup Guide

### 1. Setup MonetaryUnit Node
Either setup a MonetaryUnit node using a docker container or a local node using monetaryunitd or a QT client. Just make sure it's accessible via port 21102 on the localhost.

<details>
<summary><b> Example MonetaryUnit Mainnet Config </b></summary>

```sh
listen=1
server=1

rpcuser=RPCUSER
rpcpassword=RPCPASS
```

</details>

### 2. Run MonetaryUnit node
<details>
<summary><b>Example Starting a MonetaryUnit Node</b></summary>
  
```
# Path to your MonetaryUnit application and path to the config above
/Applications/MonetaryUnit-Qt.app/Contents/MacOS/MonetaryUnit-Qt -datadir=/Users/username/blockchains/monetaryunit-core/networks/mainnet/
```

</details>

### 3. Start Bitcore Using Docker

```sh
cp .env.example .env (Linux & MacOS/OS X)

copy .env.example .env (Windows)

docker-compose up
```

The setup containers will expose the following ports on localhost:

| Service                      | Port    |
|------------------------------|---------|
| bitcore-wallet-service (VWS) | `3232`  |
| bitcore-node                 | `3000`  |
| message broker server        | `3380`  |
| mongodb                      | `27017` |

## Production
For production you can use Nginx with reverse proxies to expose the served services to the web over port `80`.

## MongoDB Data
Letting the bitcore-node sync can take up to 4 full days depending on your internet connection, system performance and block height. To get a huge part of all the blocks you can [download a zip archive](http://staging.swenvanzanten.com/bitcore-database-latest.zip) with a mongoDB database and place the content in the `/data` directory of this repository.

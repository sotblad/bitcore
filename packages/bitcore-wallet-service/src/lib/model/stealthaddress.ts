'use strict';

export interface IStealthAddress {
  version: string;
  createdOn: number;
  address: string;
  walletId: string;
  network: string;
  scanPrivKey: string;
  scanPubKey: string;
  spendPubKeys: string[];
  m: number;
}

export class StealthAddress implements IStealthAddress {
  version: string;
  createdOn: number;
  address: string;
  walletId: string;
  network: string;
  scanPrivKey: string;
  scanPubKey: string;
  spendPubKeys: string[];
  m: number;

  static create(opts) {
    opts = opts || {};

    let x = new StealthAddress();

    x.version = '1.0.0';
    x.createdOn = Math.floor(Date.now() / 1000);

    x.address = opts.address;
    x.walletId = opts.walletId;
    x.network = opts.network;

    x.scanPrivKey = opts.scanPrivKey;
    x.scanPubKey = opts.scanPubKey;
    x.spendPubKeys = opts.spendPubKeys;
    x.m = opts.m;

    return x;
  }

  static fromObj(obj: IStealthAddress) {
    let x = new StealthAddress();

    x.version = obj.version;
    x.createdOn = obj.createdOn;
    x.address = obj.address;
    x.walletId = obj.walletId;
    x.network = obj.network;

    x.scanPrivKey = obj.scanPrivKey;
    x.scanPubKey = obj.scanPubKey;
    x.spendPubKeys = obj.spendPubKeys;
    x.m = obj.m;

    return x;
  }
}

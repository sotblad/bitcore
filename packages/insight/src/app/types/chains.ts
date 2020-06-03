export type Protocol = 'BTC' | 'MUE';
export type Code = 'BTC' | 'MUE' | 'tBTC' | 'tMUE';
export type Network = 'mainnet' | 'testnet' | 'regtest';

export interface Chain {
  code: Code;
  name: string;
  network: Network;
  protocol: Protocol;
}

export const MUE: Chain = {
  code: 'MUE',
  name: 'Bitcoin Cash',
  network: 'mainnet',
  protocol: 'MUE'
};

export const tMUE: Chain = {
  code: 'tMUE',
  name: 'Bitcoin Cash Testnet',
  network: 'testnet',
  protocol: 'MUE'
};

export const BTC: Chain = {
  code: 'BTC',
  name: 'Bitcoin',
  network: 'mainnet',
  protocol: 'BTC'
};

export const tBTC: Chain = {
  code: 'tBTC',
  name: 'Bitcoin Testnet',
  network: 'testnet',
  protocol: 'BTC'
};

export const Chains = {
  MUE,
  tMUE,
  BTC,
  tBTC
};

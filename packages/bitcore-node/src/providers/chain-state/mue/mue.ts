import { BTCStateProvider } from '../btc/btc';

export class MUEStateProvider extends BTCStateProvider {
  constructor(chain: string = 'MUE') {
    super(chain);
  }
}

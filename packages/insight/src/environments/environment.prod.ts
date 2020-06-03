import { LoggerConfig, NgxLoggerLevel } from 'ngx-logger';
import { MUE, BTC, Chain, tMUE, tBTC } from '../app/types/chains';

const loggingSettings: LoggerConfig = {
  serverLoggingUrl: '/api/logs/insight',
  level: NgxLoggerLevel.DEBUG,
  serverLogLevel: NgxLoggerLevel.ERROR
};

const initialChain: Chain = MUE;

const expectedChains: Chain[] = [MUE, tMUE, BTC, tBTC];

export const environment = {
  apiPrefix: 'https://api.bitcore.io/api',
  ratesApi: 'https://bitpay.com/api/rates/MUE',
  production: true,
  debugRouting: false,
  loggingSettings,
  initialDisplayValueCode: initialChain.code,
  initialChain,
  expectedChains,
  pollingRateMilliseconds: 60 * 1000
};

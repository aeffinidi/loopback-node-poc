import { inject, lifeCycleObserver, LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'strava',
  connector: 'rest',
  baseURL: 'https://pokeapi.co/api/v2/',
  options: '{\'headers\': {\'accept\': \'application/json\',\'content-type\': \'application/json\'},\'strictSSL\': false}',
  operations: [{
    "template": {
      "method": "GET",
      "url": "https://pokeapi.co/api/v2/generation/1",
      "headers": {
        "accepts": "application/json",
        "content-type": "application/json"
      },
      // "query": {
      //   "address": "{street},{city},{zipcode}",
      //   "sensor": "{sensor=false}"
      // },
      "responsePath": "$.main_region.name"
    },
    "functions": {
      "getActivities": []
    }
  }],
  crud: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class StravaDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'strava';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.strava', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

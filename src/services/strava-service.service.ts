import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {StravaDataSource} from '../datasources';

type StravaActivity ={
  name: string
}

export interface StravaService {
  getActivities: () => Promise<StravaActivity[]>
}

export class StravaServiceProvider implements Provider<StravaService> {
  constructor(
    // strava must match the name property in the datasource json file
    @inject('datasources.strava')
    protected dataSource: StravaDataSource = new StravaDataSource(),
  ) {}

  value(): Promise<StravaService> {
    return getService(this.dataSource);
  }
}

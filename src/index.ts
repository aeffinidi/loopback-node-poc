import { StravaDataSource } from "./datasources";
import { StravaServiceProvider } from "./services";

export const hello = (name: string): string => {
  return `Hello, ${name}`;
};


const ds = new StravaDataSource()
// strava.

const provider = new StravaServiceProvider()

const execute = async () => {
  const value = await provider.value()

  const activities = await value.getActivities()
  console.log(activities)
}

execute()
import Config from 'react-native-config';
import { Platform } from 'react-native';

export const BuildConfig = {
  env_key: 'vms',
};

export const env_set: any = {
  vms: {
    ApiUrl: Config.API_URL,
    codePush: Platform.select({
      ios: {
        staging: '',
      production: '',
      },
      android: {
        staging: '',
      production: '',
      },
    }),
  },
};

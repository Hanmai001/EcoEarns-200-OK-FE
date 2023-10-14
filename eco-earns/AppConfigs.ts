import getNextConfig from 'next/config';

const { publicRuntimeConfig } = getNextConfig();
const ENV = publicRuntimeConfig.ENV || 'develop';

export const IS_ONLY_ETHW_CHAIN = !!publicRuntimeConfig.IS_ONLY_ETHW_CHAIN;

export interface AppEnvs {
  ENV: string;
  PUBLIC_URL: string;
}

export const DevelopmentEnvs: AppEnvs = {
  ENV: 'develop',
  PUBLIC_URL: 'http://localhost:3000',
}

const envs = ENV === 'production' ? DevelopmentEnvs : DevelopmentEnvs;

export const getEnv = (key: keyof typeof envs) => publicRuntimeConfig[key] || envs[key] as string;

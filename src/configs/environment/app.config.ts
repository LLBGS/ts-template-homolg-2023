import * as dotenv from 'dotenv';
dotenv.config();

const requiredEnvs = ['PORT', 'NODE_ENV'];

interface IAppConfig {
  port: number;
  nodeEnv: string;
  appName: string;
}

export class AppConfig {
  private static _environment: IAppConfig | undefined;

  static get environment(): IAppConfig {
    if (typeof this._environment === 'undefined') {
      this.validateIfRequiredEnvsArePresent();
      this._environment = this.mountEnvironment();
    }
    return this._environment;
  }

  static validateIfRequiredEnvsArePresent() {
    requiredEnvs.forEach((env) => {
      if (!process.env[env]) {
        throw new Error(`Environment variable ${env} is missing`);
      }
    });
  }

  static mountEnvironment(): IAppConfig {
    return {
      port: Number(process.env.PORT) || 3000,
      nodeEnv: process.env.NODE_ENV || 'development',
      appName: process.env.APP_NAME || 'app',
    };
  }
}

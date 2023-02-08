import { PlaywrightTestConfig } from '@playwright/test';

const config = {
  testDir: './tests',
  use: {
    baseUrl: process.env.MY_CUSTOM_BASE_URL
  }
}

// DEBUG LINE ONLY:  https://github.com/microsoft/playwright/issues/11060
console.log('in playwright.config.ts, __dirname is', __dirname);

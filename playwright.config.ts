import { PlaywrightTestConfig } from '@playwright/test';

const config = {
  testDir: './tests',
  use: {
    baseUrl: process.env.MY_CUSTOM_BASE_URL
  }
}

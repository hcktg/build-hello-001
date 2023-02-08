import { PlaywrightTestConfig } from '@playwright/test';

const config = {
  use: {
    baseUrl: process.env.MY_CUSTOM_BASE_URL
  }
}

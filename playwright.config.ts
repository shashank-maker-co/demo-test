import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './test',
  timeout: 1 * 60 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: !true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: process.env.CI ? [["junit", {
    outputFile: "results.xml"
  }]] : [["json", {
    outputFile: "report.json"
  }], ["html", {
    open: "on-failure"
  }]],
  use: {
    ...devices[process.env.DEVICE_NAME || 'Desktop Chrome'],
    // viewport: { width: 1200, height: 800 },
    launchOptions: {
      args: ["--start-maximized"],
      slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
    },
    screenshot: process.env.ENVIRONMENT_NAME === 'preview' || process.env.ENVIRONMENT_NAME === 'production'
      ? 'only-on-failure'
      : 'only-on-failure',

    headless: true,
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 15000,
    navigationTimeout: 15000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: {
      mode: 'on',
      size: { width: 1100, height: 800 }
    },

  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }
  ]
};

export default config;
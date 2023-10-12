import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.ENVIRONMENT_NAME === 'preview' || process.env.ENVIRONMENT_NAME === 'production'
    ? 1
    : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 6 : 6,
  reporter: [['junit', { outputFile: 'results.xml' }]],
  use: {
    ...devices[process.env.DEVICE_NAME || 'Desktop Chrome'],
    // viewport: { width: 1200, height: 800 },
    launchOptions: {
      args: ["--start-maximized"],
      slowMo: process.env.SLOW_MO ? parseInt(process.env.SLOW_MO) : 0,
    },
    headless: true,
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 15000,
    navigationTimeout: 15000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'off' : 'on',
    video: {
      mode: process.env.CI ? 'off' : 'on',
      size: { width: 1100, height: 800 }
    },
    screenshot: process.env.CI ? 'off' : 'only-on-failure',

  },

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //       launchOptions: {
  //         args: ['--start-maximized'],
  //       }
  //     },
  //   },

  //   // {
  //   //   name: 'firefox',
  //   //   use: { ...devices['Desktop Firefox'] },
  //   // },

  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices['Desktop Safari'] },
  //   // },

  //   /* Test against mobile viewports. */
  //   // {
  //   //   name: 'Mobile Chrome',
  //   //   use: { ...devices['Pixel 5'] },
  //   // },
  //   // {
  //   //   name: 'Mobile Safari',
  //   //   use: { ...devices['iPhone 12'] },
  //   // },

  //   /* Test against branded browsers. */
  //   // {
  //   //   name: 'Microsoft Edge',
  //   //   use: { channel: 'msedge' },
  //   // },
  //   // {
  //   //   name: 'Google Chrome',
  //   //   use: { channel: 'chrome' },
  //   // },
  // ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});

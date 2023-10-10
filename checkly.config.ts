import { defineConfig } from 'checkly'

export default defineConfig({
    projectName: 'checks playwright',
    logicalId: 'website-monitoring-1',
    repoUrl: 'https://github.com/shashank-maker-co/checks-playwright',
    checks: {
        activated: true,
        muted: false,
        runtimeId: '2023.02',
        frequency: 5,
        locations: ['us-east-1', 'eu-west-1'],
        tags: ['website', 'api'],
        alertChannels: [],
        checkMatch: '**/test/*.check.ts',
        ignoreDirectoriesMatch: [],
        browserChecks: {
            frequency: 360,
            testMatch: '**/test/**/*.spec.ts',
        },
    },
    cli: {
        runLocation: 'eu-west-1',
    }
})
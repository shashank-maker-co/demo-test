import { defineConfig } from 'checkly'

interface GitConfig {
    branch: string;
    commitSha: string;
    owner: string;
}

interface ChecklyConfig {
    projectName: string;
    logicalId: string;
    repoUrl: string;
    checks: {
        activated: true;
        muted: false;
        runtimeId: string;
        frequency: number;
        locations: ("us-east-1" | "eu-west-1")[];
        tags: string[];
        alertChannels: never[];
        checkMatch: string;
        ignoreDirectoriesMatch: never[];
        browserChecks: {
            frequency: number;
            testMatch: string;
        };
    };
    cli: {
        runLocation: string;
    };
    git: GitConfig;
}

export default defineConfig<ChecklyConfig>({
    projectName: 'Playwright Checks Pages',
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
    },
    git: {
        branch: "${CHECKLY_GIT_BRANCH}",
        commitSha: "${CHECKLY_GIT_COMMIT_SHA}",
        owner: "${CHECKLY_GIT_OWNER}"
    }
})
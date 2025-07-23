import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Disabled, 'always', 100],
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
    'references-empty': [RuleConfigSeverity.Error, 'always'],
    'subject-case': [RuleConfigSeverity.Error, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
}

export default config

// https://github.com/conventional-changelog/commitlint/#what-is-commitlint
// https://www.conventionalcommits.org/en/v1.0.0/

// Available types:

// `feat`:     A new feature
// `fix`:      A bug fix
// `docs`:     Documentation only changes
// `style`:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// `perf`:     A code change that improves performance
// `refactor`: A code change that does not add a feature, improve performance, or fix a bug
// `test`:     Adding missing tests or correcting existing tests
// `build`:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// `ci`:       Changes to CI configuration files and scripts
// `revert`:   Reverts a previous commit
// `chore`:    Other changes that don't modify src or test files

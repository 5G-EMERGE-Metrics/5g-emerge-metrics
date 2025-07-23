import { type Configuration } from 'lint-staged'

const config: Configuration = {
  '*.{mjs,ts}': ['eslint --fix'],
}

export default config

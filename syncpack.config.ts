import type { RcFile } from 'syncpack'

const config: RcFile = {
  sortFirst: ['private', 'name', 'description', 'version', 'author', 'type', 'main', 'types', 'files', 'scripts'],
  sortPackages: true,
  versionGroups: [
    {
      packages: [
        '**'
      ],
      dependencies: [
        '$LOCAL'
      ],
      dependencyTypes: [
        'dev',
        'prod'
      ],
      pinVersion: '*'
    }
  ]
}

export default config

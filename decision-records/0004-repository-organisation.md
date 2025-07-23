# Repository Organisation

Date: 2025-07-23

## Status

Accepted

## Context and Problem Statement

As the project grows to include multiple scripts, configuration files, and example dashboards, it is important to decide how to organize these components. The main options are to use a monorepo (all components in a single repository) or split them into multiple repositories by function or team.

## Considered Options

- Use a monorepo to contain all decision records, tools, configuration, and sample dashboards
- Split components into multiple repositories (polyrepo)

## Decision Outcome

We will use a monorepo structure for this repository. All decision records, tools, shared configuration, and sample dashboards will be managed together in a single repository. This approach simplifies dependency management, ensures consistency, and makes it easier to coordinate changes across related components.

## Consequences

- All project artifacts are versioned and released together
- Easier cross-referencing and coordination between decision records, tools, configuration, and dashboards
- Contributors only need to work with a single repository
- The repository may grow large, so clear organization and documentation are required

## More Information

- [Monorepo vs Polyrepo](https://trunkbaseddevelopment.com/monorepos/)
- [Monorepo: Please do!](https://danluu.com/monorepo/)

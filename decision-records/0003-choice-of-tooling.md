# Choice of Tooling

Date: 2025-07-23

## Status

Accepted

## Context and Problem Statement

A key decision for this project is the choice of tooling for scripts, configuration management, and supporting utilities. The main options considered were Bash, TypeScript and Python, all of which are popular for backend and scripting tasks.

## Considered Options

- Use shell scripts
- Use TypeScript
- Use Python
- Use another language (e.g., Go, Rust)
- Use a combination of the above

## Decision Outcome

We will use TypeScript as the primary language for tools in this repository. Shell scripts will be used for simple tasks and automation where appropriate, however, TypeScript will be the main language for more complex scripts and utilities.

TypeScript offers strong typing, excellent tooling, and is well-suited for both scripting and more complex application logic. It also integrates well with modern development environments and CI/CD pipelines.

## Consequences

- shell scripts will be used for simple tasks and automation where appropriate
- TypeScript will be the main language for more complex scripts and utilities
- TypeScript provides strong typing and better tooling support
- This choice aligns with the Node.js ecosystem, which is already used in the project
- Contributors should be familiar with TypeScript and the Node.js ecosystem
- Future tooling decisions should consider compatibility with TypeScript

## More Information

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js](https://nodejs.org/)
- [Why TypeScript?](https://www.typescriptlang.org/why-create-typescript)

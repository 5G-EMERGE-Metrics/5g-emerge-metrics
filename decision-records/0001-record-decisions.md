# Record Decisions

Date: 2025-07-23

## Status

Accepted

## Context and Problem Statement

We need to record the decisions made on this project to ensure transparency and traceability.

## Considered Options

- Do not record decisions
- Use a custom decision log format
- Use Architecture Decision Records (ADR)

## Decision Outcome

We will record decisions using Architecture Decision Records (ADR).

This approach is widely recognized and provides a structured way to record decisions, their context, and consequences.

More specifically, we will use the [MADR](https://adr.github.io/madr/) format, which is a Markdown-based format for documenting decision records.

Decision records will be stored in the `decision-records` directory of the repository, with each record named using a sequential number and a descriptive title (e.g., `0001-record-decisions.md`).

## Consequences

- Using ADRs will help us maintain a clear history of decisions, making it easier for new team members to understand the project's evolution.
- It helps in understanding the rationale behind decisions and facilitates future discussions and reviews.

## More Information

- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=joelday.adrian)
- [adr-tools](https://github.com/npryce/adr-tools) - a command-line tool for managing ADRs
- [MADR](https://adr.github.io/madr/)
- [Documenting Architecture Decisions by Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
  
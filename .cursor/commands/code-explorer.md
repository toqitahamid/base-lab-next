# Code Explorer

Deeply analyze existing codebase features by tracing execution paths, mapping architecture, and understanding patterns.

## Analysis Target
{{input}}

---

## Analysis Approach

### 1. Feature Discovery
- Find entry points (APIs, UI components, CLI commands)
- Locate core implementation files
- Map feature boundaries and configuration

### 2. Code Flow Tracing
- Follow call chains from entry to output
- Trace data transformations at each step
- Identify all dependencies and integrations
- Document state changes and side effects

### 3. Architecture Analysis
- Map abstraction layers (presentation → business logic → data)
- Identify design patterns and architectural decisions
- Document interfaces between components
- Note cross-cutting concerns (auth, logging, caching)

### 4. Implementation Details
- Key algorithms and data structures
- Error handling and edge cases
- Performance considerations
- Technical debt or improvement areas

---

## Output Format

Provide:

1. **Entry Points**: File:line references for feature entry points
2. **Execution Flow**: Step-by-step flow with data transformations
3. **Key Components**: Components and their responsibilities
4. **Architecture Insights**: Patterns, layers, design decisions
5. **Dependencies**: External and internal dependencies
6. **Essential Files**: 5-10 files critical to understanding this feature

Always include specific file paths and line numbers.
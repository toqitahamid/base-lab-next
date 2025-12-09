# Feature Development Workflow

## Overview
Systematic 7-phase approach to building new features. Follow each phase in order.

## Current Request
{{input}}

---

## Phase 1: Discovery

**Goal**: Understand what needs to be built

1. If the feature request is unclear, ask:
   - What problem are you solving?
   - What should the feature do?
   - Any constraints or requirements?
2. Summarize your understanding and confirm with the user
3. Create a TODO list for all 7 phases

---

## Phase 2: Codebase Exploration

**Goal**: Understand relevant existing code and patterns

Analyze the codebase thoroughly:

1. **Find similar features**: Search for features similar to the requested one. Trace their implementation patterns.
2. **Map architecture**: Identify the architectural patterns, abstraction layers, and conventions used.
3. **Analyze integration points**: Find where the new feature will connect with existing code.

For each analysis, identify:
- Entry points with file:line references
- Execution flow and data transformations
- Key components and responsibilities
- 5-10 essential files to understand

Present a comprehensive summary of findings before proceeding.

---

## Phase 3: Clarifying Questions

**CRITICAL: DO NOT SKIP THIS PHASE**

**Goal**: Fill in gaps and resolve all ambiguities before designing

1. Review codebase findings and original feature request
2. Identify underspecified aspects:
   - Edge cases
   - Error handling
   - Integration points
   - Scope boundaries
   - Backward compatibility
   - Performance needs
3. **Present all questions in a clear, organized list**
4. **WAIT for answers before proceeding to architecture design**

If user says "whatever you think is best", provide your recommendation and get explicit confirmation.

---

## Phase 4: Architecture Design

**Goal**: Design multiple implementation approaches

Design 2-3 approaches with different trade-offs:

1. **Minimal Changes**: Smallest change, maximum reuse
2. **Clean Architecture**: Maintainability, elegant abstractions
3. **Pragmatic Balance**: Speed + quality

For each approach, include:
- Summary of the approach
- Specific files to create/modify
- Trade-offs (pros/cons)

Then provide:
- Your recommendation with reasoning
- **Ask user which approach they prefer**

---

## Phase 5: Implementation

**DO NOT START WITHOUT USER APPROVAL**

**Goal**: Build the feature

1. Wait for explicit user approval on architecture choice
2. Read all relevant files identified in previous phases
3. Implement following chosen architecture
4. Follow codebase conventions strictly
5. Write clean, well-documented code
6. Update TODOs as you progress

---

## Phase 6: Quality Review

**Goal**: Ensure code is simple, DRY, elegant, and functionally correct

Review the implementation for:

1. **Simplicity/DRY/Elegance**:
   - Code duplication
   - Unnecessary complexity
   - Readability issues

2. **Bugs/Correctness**:
   - Logic errors
   - Edge cases not handled
   - Security vulnerabilities

3. **Conventions/Patterns**:
   - Project standard compliance
   - Consistent with existing codebase

Present findings with severity levels and ask user:
- Fix now?
- Fix later?
- Proceed as-is?

---

## Phase 7: Summary

**Goal**: Document what was accomplished

Summarize:
- What was built
- Key decisions made
- Files created/modified
- Suggested next steps (tests, documentation, etc.)

---

## Execution Notes

- Follow phases sequentially
- Get user confirmation before moving to next phase
- Be thorough in exploration (Phase 2) - it pays off
- Never skip clarifying questions (Phase 3)
- Present trade-offs clearly in architecture (Phase 4)
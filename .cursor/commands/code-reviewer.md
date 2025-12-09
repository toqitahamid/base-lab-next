# Code Reviewer

Review code for bugs, logic errors, security vulnerabilities, code quality issues, and adherence to project conventions.

## Review Scope
{{input}}

If no specific scope provided, review unstaged changes from `git diff`.

---

## Review Focus Areas

### 1. Project Guidelines Compliance
Check adherence to project rules (CLAUDE.md, .cursorrules, or equivalent):
- Import patterns
- Framework conventions
- Language-specific style
- Function declarations
- Error handling
- Logging practices
- Testing practices
- Naming conventions

### 2. Bug Detection
Identify actual bugs that will impact functionality:
- Logic errors
- Null/undefined handling
- Race conditions
- Memory leaks
- Security vulnerabilities
- Performance problems

### 3. Code Quality
Evaluate significant issues:
- Code duplication (DRY violations)
- Missing critical error handling
- Accessibility problems
- Inadequate test coverage
- Overly complex logic

---

## Confidence Scoring

Rate each issue 0-100:
- **0-24**: Likely false positive
- **25-49**: Might be real, might be stylistic
- **50-74**: Real issue but possibly minor
- **75-89**: Very likely real, important
- **90-100**: Definitely real, critical

**Only report issues with confidence ≥ 80.**

---

## Output Format

### Review Summary
State what was reviewed (files, scope)

### Critical Issues (Confidence 90-100)
For each:
- Description with confidence score
- File path and line number
- Explanation of impact
- Concrete fix suggestion

### Important Issues (Confidence 80-89)
For each:
- Description with confidence score
- File path and line number
- Project guideline reference (if applicable)
- Suggested fix

### Summary
- Overall assessment
- Recommendations (fix now, fix later, or OK to proceed)

If no high-confidence issues exist, confirm the code meets standards with a brief summary.
# Husky Configuration

This project uses Husky to enforce code quality checks before commits and pushes.

## Hooks Configuration

### Pre-commit Hook (`.husky/pre-commit`)

Runs the following checks before each commit:

1. **Lint-staged**:

   - ESLint with auto-fix on staged files
   - Prettier formatting on staged files
   - TypeScript type checking on staged files

2. **TypeScript Type Check**:

   - Full TypeScript compilation check (`tsc --noEmit`)
   - Ensures no type errors in the entire codebase

3. **Tests**:

   - Runs Jest tests (`npm run test`)
   - Uses `--passWithNoTests` to allow commits even if no tests exist
   - Uses `--watchAll=false` to run once and exit

4. **Build Check** (commented out):
   - Optional full build check
   - Can be uncommented if needed, but may slow down commits

### Pre-push Hook (`.husky/pre-push`)

Runs the following checks before pushing to remote:

1. **TypeScript Type Check**: Full type checking
2. **Tests**: Complete test suite
3. **Build Check**: Full Next.js build to ensure production readiness

### Commit Message Hook (`.husky/commit-msg`)

Validates commit message format using conventional commits:

- **Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`
- **Format**: `<type>(<scope>): <description>`
- **Examples**:
  - `feat: add new feature`
  - `fix(auth): resolve login issue`
  - `docs: update README`

## Lint-staged Configuration

Located in `package.json`:

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "tsc --noEmit"
  ],
  "*.{json,css,md,yml,yaml}": [
    "prettier --write"
  ]
}
```

## Available Scripts

- `npm run lint`: Run ESLint
- `npm run lint:fix`: Run ESLint with auto-fix
- `npm run format`: Run Prettier formatting
- `npm run test`: Run Jest tests
- `npm run build`: Build the Next.js application

## Benefits

1. **Code Quality**: Ensures consistent formatting and linting
2. **Type Safety**: Catches TypeScript errors before commits
3. **Test Coverage**: Ensures tests pass before code changes
4. **Build Safety**: Prevents broken builds from being pushed
5. **Commit Standards**: Enforces conventional commit messages

## Troubleshooting

If hooks fail:

1. **Fix linting issues**: Run `npm run lint:fix`
2. **Fix formatting**: Run `npm run format`
3. **Fix TypeScript errors**: Address type issues in your code
4. **Fix failing tests**: Update or fix failing tests
5. **Fix build issues**: Resolve any build-time errors

## Skipping Hooks (Emergency)

To skip hooks in emergency situations:

```bash
git commit --no-verify -m "emergency fix"
git push --no-verify
```

⚠️ **Warning**: Only use this for true emergencies, as it bypasses all quality checks.

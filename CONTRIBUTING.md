# Contributing to EzyWay

Thank you for your interest in contributing to EzyWay! This document provides guidelines and information for
contributors.

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/ezyway.git`
3. **Install** dependencies: `npm install`
4. **Create** a feature branch: `git checkout -b feat/your-feature-name`
5. **Make** your changes
6. **Test** your changes: `npm run build && npm test`
7. **Commit** with conventional commits: `git commit -m "feat: add your feature"`
8. **Push** to your fork: `git push origin feat/your-feature-name`
9. **Create** a Pull Request

## 📋 Prerequisites

- Node.js 18+
- npm 9+
- Git

## 🛠️ Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the environment example file and configure your variables:

```bash
cp env.example .env.local
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:4000`

## 📝 Code Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type - use `unknown` when needed
- Export types from dedicated type files

### React Components

- Use functional components with hooks
- Follow the component structure:

  ```typescript
  // components/ComponentName/ComponentName.tsx
  import { ComponentNameProps } from './types';

  export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
    return <div>Component content</div>;
  }
  ```

### File Structure

```
components/
  ComponentName/
    ComponentName.tsx    # Main component
    index.ts            # Exports
    types.ts            # TypeScript types
    styles.module.css   # Styles (if needed)
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (`userName`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: PascalCase (`UserProfileProps`)

## 🎯 Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes
- `build`: Build system changes
- `revert`: Revert previous commit

### Examples

```bash
git commit -m "feat: add user authentication"
git commit -m "fix(auth): resolve login validation issue"
git commit -m "docs: update API documentation"
git commit -m "style: format code with prettier"
git commit -m "refactor: improve component structure"
git commit -m "test: add unit tests for auth module"
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Use Jest and React Testing Library
- Test component behavior, not implementation
- Follow the AAA pattern: Arrange, Act, Assert
- Mock external dependencies

### Example Test

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
});
```

## 🎨 Styling

### CSS Modules

- Use CSS Modules for component-specific styles
- Follow BEM methodology for class naming
- Keep styles co-located with components

### Tailwind CSS

- Use Tailwind utility classes for layout and spacing
- Create custom components for reusable patterns
- Use the `cn` utility for conditional classes

### Example

```typescript
import { cn } from '@/utils/cn';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ variant = 'primary', className }: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        'px-4 py-2 rounded',
        className
      )}
    >
      Button
    </button>
  );
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode

# Storybook
npm run storybook    # Start Storybook
npm run build-storybook # Build Storybook
```

## 🏗️ Project Structure

```
ezyway/
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   └── api/               # API routes
├── components/             # Reusable components
├── features/              # Feature-based modules
│   ├── auth/             # Authentication
│   ├── notifications/    # Notifications
│   ├── search/           # Search functionality
│   └── theme/            # Theme management
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── store/                # Redux store
├── styles/               # Global styles
└── public/               # Static assets
```

## 🌐 Internationalization

We use `next-intl` for internationalization. Add translations to the `locales` directory:

```json
// locales/en.json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel"
  }
}
```

## 🔒 Security

- Never commit sensitive information (API keys, passwords)
- Use environment variables for configuration
- Validate all user inputs
- Follow OWASP security guidelines

## 📦 Adding Dependencies

### Production Dependencies

```bash
npm install package-name
```

### Development Dependencies

```bash
npm install --save-dev package-name
```

### Guidelines

- Prefer well-maintained packages with good TypeScript support
- Check bundle size impact
- Ensure compatibility with our Node.js version
- Document why the dependency is needed

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**: OS, Node.js version, npm version
2. **Steps to reproduce**: Clear, step-by-step instructions
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Console errors**: Any error messages

## 💡 Feature Requests

When requesting features, please include:

1. **Problem description**: What problem does this solve?
2. **Proposed solution**: How should it work?
3. **Use cases**: When would this be used?
4. **Mockups**: Visual examples if applicable

## 🤝 Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Add** tests for new functionality
5. **Update** documentation if needed
6. **Ensure** all tests pass
7. **Commit** with conventional commits
8. **Push** to your fork
9. **Create** a Pull Request

### PR Guidelines

- Provide a clear description of changes
- Include screenshots for UI changes
- Link related issues
- Request reviews from maintainers
- Respond to review comments promptly

## 📚 Documentation

- Keep documentation up to date
- Use clear, concise language
- Include code examples
- Document breaking changes
- Update README.md for significant changes

## 🎯 Code Review Guidelines

### For Contributors

- Respond to review comments promptly
- Make requested changes or explain why not
- Test changes thoroughly
- Keep commits focused and atomic

### For Reviewers

- Be constructive and respectful
- Focus on code quality and functionality
- Check for security issues
- Ensure tests are adequate
- Verify documentation updates

## 🚀 Release Process

1. **Version bump**: Update package.json version
2. **Changelog**: Update CHANGELOG.md
3. **Tag**: Create git tag
4. **Deploy**: Deploy to production
5. **Announce**: Notify stakeholders

## 📞 Getting Help

- **Issues**: Use GitHub Issues for bugs and feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the README and inline docs
- **Code**: Review existing code for examples

## 🙏 Acknowledgments

Thank you for contributing to EzyWay! Your contributions help make this project better for everyone.

---

**Happy Coding! 🎉**

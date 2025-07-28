# Button Component

A flexible and accessible button component with multiple variants, sizes, and states.

## Features

- **Multiple Variants**: Primary, Secondary, Outline, Ghost, and Destructive
- **Different Sizes**: Small, Medium, and Large
- **Loading State**: Shows a spinner when `isLoading` is true
- **Disabled State**: Properly handles disabled state
- **Full Width**: Option to make button full width
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript**: Fully typed with comprehensive props interface

## Usage

```tsx
import { Button } from '@/components/Button';

// Basic usage
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>

// With variant
<Button variant="primary" onClick={handleClick}>
  Primary Button
</Button>

// With size
<Button size="lg" variant="outline">
  Large Outline Button
</Button>

// Loading state
<Button isLoading>
  Loading...
</Button>

// Disabled state
<Button disabled>
  Disabled Button
</Button>

// Full width
<Button fullWidth>
  Full Width Button
</Button>
```

## Props

| Prop        | Type                                                                | Default     | Description                    |
| ----------- | ------------------------------------------------------------------- | ----------- | ------------------------------ |
| `children`  | `React.ReactNode`                                                   | -           | Button content                 |
| `variant`   | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Button style variant           |
| `size`      | `'sm' \| 'md' \| 'lg'`                                              | `'md'`      | Button size                    |
| `isLoading` | `boolean`                                                           | `false`     | Shows loading spinner          |
| `disabled`  | `boolean`                                                           | `false`     | Disables the button            |
| `fullWidth` | `boolean`                                                           | `false`     | Makes button full width        |
| `className` | `string`                                                            | -           | Additional CSS classes         |
| `onClick`   | `(event: MouseEvent) => void`                                       | -           | Click handler                  |
| `...props`  | `ButtonHTMLAttributes<HTMLButtonElement>`                           | -           | All standard button attributes |

## Variants

### Primary

Default blue button for primary actions.

### Secondary

Gray button for secondary actions.

### Outline

Transparent button with border, good for less prominent actions.

### Ghost

Minimal button with no background, good for subtle actions.

### Destructive

Red button for destructive actions like delete.

## Sizes

### Small (`sm`)

Compact button for tight spaces.

### Medium (`md`)

Default size, good for most use cases.

### Large (`lg`)

Prominent button for important actions.

## States

### Loading

When `isLoading` is true, the button shows a spinner and is disabled.

### Disabled

When `disabled` is true, the button is non-interactive and visually dimmed.

## Accessibility

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Testing

The component includes comprehensive tests covering:

- All variants and sizes
- Loading and disabled states
- Click handlers
- Accessibility features
- Custom props forwarding

Run tests with:

```bash
npm test -- --testPathPattern=Button.test.tsx
```

## Storybook

View all variants and examples in Storybook:

```bash
npm run storybook
```

Then navigate to "Components/Button" to see all examples.

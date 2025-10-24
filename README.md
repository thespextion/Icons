# @spextion/icons

A collection of beautiful, customizable icons for Next.js applications with full TypeScript and Tailwind CSS support.

## Features

- Written in TypeScript with full type definitions
- Optimized for Next.js and React
- Works seamlessly with Tailwind CSS
- Tree-shakeable - only bundle the icons you use
- Customizable size and styling
- SVG-based for crisp rendering at any size

## Installation

```bash
npm install @spextion/icons
# or
yarn add @spextion/icons
# or
pnpm add @spextion/icons
```

## Usage

### Basic Usage

```tsx
import { Home, User, Search } from '@spextion/icons';

export default function MyComponent() {
  return (
    <div>
      <Home />
      <User size={32} />
      <Search className="text-blue-500" />
    </div>
  );
}
```

### With Next.js App Router

```tsx
'use client';

import { Heart, Settings } from '@spextion/icons';

export default function Page() {
  return (
    <div className="flex gap-4">
      <Heart className="text-red-500 hover:text-red-600 transition-colors" />
      <Settings size={28} className="text-gray-700" />
    </div>
  );
}
```

### With Tailwind CSS

The icons work perfectly with Tailwind utility classes:

```tsx
import { Home } from '@spextion/icons';

export default function Navigation() {
  return (
    <Home
      className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
    />
  );
}
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Sets both width and height of the icon |
| `className` | `string` | `''` | Additional CSS classes (Tailwind classes work great!) |
| `...props` | `SVGProps<SVGSVGElement>` | - | Any valid SVG element props |

## Available Icons

- `Home`
- `User`
- `Search`
- `Heart`
- `Settings`

## Styling Examples

### Using Tailwind CSS Classes

```tsx
import { Heart, User, Search } from '@spextion/icons';

// Color
<Heart className="text-red-500" />

// Size (using Tailwind)
<User className="w-8 h-8" />

// Hover effects
<Search className="text-gray-500 hover:text-gray-700 transition-colors" />

// Responsive sizing
<Heart className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" />
```

### Using the Size Prop

```tsx
import { Home } from '@spextion/icons';

// Numeric size
<Home size={32} />

// String size
<Home size="2rem" />
```

### Custom Styling

```tsx
import { Settings } from '@spextion/icons';

<Settings
  size={24}
  className="text-blue-500"
  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
/>
```

## TypeScript Support

All components are written in TypeScript and include full type definitions:

```tsx
import { IconProps } from '@spextion/icons';

// Use IconProps for custom wrapper components
const CustomIcon: React.FC<IconProps> = (props) => {
  return <Home {...props} />;
};
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

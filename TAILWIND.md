# Tailwind CSS Integration Guide

This guide shows you how to use ex-pack icons with Tailwind CSS in your Next.js project.

## Installation

First, make sure you have both packages installed:

```bash
npm install @your-scope/ex-pack tailwindcss
```

## Setup Tailwind CSS (if not already configured)

1. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

2. Configure your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. Add Tailwind directives to your CSS (e.g., `globals.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Using Icons with Tailwind

### Text Color

Icons inherit the current text color, making them work seamlessly with Tailwind's text color utilities:

```tsx
import { Home, Heart, User } from '@your-scope/ex-pack';

<Home className="text-blue-500" />
<Heart className="text-red-600" />
<User className="text-gray-700" />
```

### Sizing

You can use either the `size` prop or Tailwind's width/height utilities:

```tsx
import { Search } from '@your-scope/ex-pack';

// Using size prop
<Search size={24} />

// Using Tailwind classes
<Search className="w-6 h-6" />
<Search className="w-8 h-8" />
<Search className="w-12 h-12" />
```

### Hover Effects

```tsx
import { Heart, Settings } from '@your-scope/ex-pack';

<Heart className="text-gray-400 hover:text-red-500 transition-colors duration-200" />

<Settings className="
  text-gray-600
  hover:text-blue-600
  hover:rotate-45
  transition-all
  duration-300
" />
```

### Responsive Design

```tsx
import { Home } from "@your-scope/ex-pack";

<Home
  className="
  w-4 h-4
  md:w-6 md:h-6
  lg:w-8 lg:h-8
  text-blue-500
  md:text-blue-600
  lg:text-blue-700
"
/>;
```

### Dark Mode Support

```tsx
import { User } from '@your-scope/ex-pack';

<User className="text-gray-900 dark:text-gray-100" />

<User className="
  text-blue-500
  dark:text-blue-400
  hover:text-blue-700
  dark:hover:text-blue-300
" />
```

## Common Patterns

### Navigation Icons

```tsx
import { Home, User, Search, Settings } from "@your-scope/ex-pack";

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4">
      <Home className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" />
      <User className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" />
      <Search className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" />
      <Settings className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer transition-colors" />
    </nav>
  );
}
```

### Button with Icon

```tsx
import { Heart } from "@your-scope/ex-pack";

export default function LikeButton() {
  return (
    <button
      className="
      flex items-center gap-2
      px-4 py-2
      bg-white
      hover:bg-red-50
      border border-gray-300
      rounded-lg
      transition-colors
    "
    >
      <Heart className="w-5 h-5 text-red-500" />
      <span className="text-gray-700">Like</span>
    </button>
  );
}
```

### Icon with Badge

```tsx
import { User } from "@your-scope/ex-pack";

export default function UserWithBadge() {
  return (
    <div className="relative inline-block">
      <User className="w-8 h-8 text-gray-700" />
      <span
        className="
        absolute -top-1 -right-1
        w-4 h-4
        bg-red-500
        text-white
        text-xs
        rounded-full
        flex items-center justify-center
      "
      >
        3
      </span>
    </div>
  );
}
```

### Loading State with Animation

```tsx
import { Settings } from "@your-scope/ex-pack";

export default function LoadingIcon() {
  return <Settings className="w-6 h-6 text-blue-500 animate-spin" />;
}
```

### Icon Grid

```tsx
import { Home, User, Search, Heart, Settings } from "@your-scope/ex-pack";

export default function IconGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Home className="w-8 h-8 text-blue-500" />
        <span className="text-sm text-gray-600">Home</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <User className="w-8 h-8 text-green-500" />
        <span className="text-sm text-gray-600">Profile</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Search className="w-8 h-8 text-purple-500" />
        <span className="text-sm text-gray-600">Search</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Heart className="w-8 h-8 text-red-500" />
        <span className="text-sm text-gray-600">Favorites</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Settings className="w-8 h-8 text-gray-500" />
        <span className="text-sm text-gray-600">Settings</span>
      </div>
    </div>
  );
}
```

## Tips

1. **Use `currentColor`**: Icons use `currentColor` for stroke, so they automatically inherit text color from Tailwind classes
2. **Combine size prop with className**: You can use both `size={24}` and `className="text-blue-500"` together
3. **Transitions**: Add `transition-colors` or `transition-all` for smooth color/transform changes
4. **Cursor**: Add `cursor-pointer` when icons are clickable
5. **Accessibility**: Consider adding appropriate ARIA labels for clickable icons

## Advanced: Custom Icon Component

Create a reusable icon button component:

```tsx
import { IconProps } from "@your-scope/ex-pack";
import React from "react";

interface IconButtonProps {
  icon: React.ComponentType<IconProps>;
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  variant = "primary",
}) => {
  const variants = {
    primary: "text-blue-500 hover:text-blue-700 hover:bg-blue-50",
    secondary: "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
    danger: "text-red-500 hover:text-red-700 hover:bg-red-50",
  };

  return (
    <button
      onClick={onClick}
      className={`
        p-2 rounded-lg
        transition-colors
        ${variants[variant]}
      `}
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
};

// Usage
import { Heart } from "@your-scope/ex-pack";
<IconButton icon={Heart} label="Like" variant="danger" />;
```

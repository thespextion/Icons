# @spextion/icons

A collection of beautiful, customizable icons for React, React Native, Expo, and Next.js applications with full TypeScript support.

## Features

- Written in TypeScript with full type definitions
- **Cross-platform**: Works seamlessly on Web (React/Next.js) and Mobile (React Native/Expo)
- **Web**: Works seamlessly with Tailwind CSS
- **Mobile**: Built with `react-native-svg` for optimal performance
- Tree-shakeable - only bundle the icons you use
- Customizable size, color, and styling
- SVG-based for crisp rendering at any size

> **📱 Using React Native or Expo?** Check out the dedicated [React Native Guide](REACT_NATIVE.md) for detailed examples and best practices.

## Installation

### For Web (React/Next.js)

```bash
npm install @spextion/icons
# or
yarn add @spextion/icons
# or
pnpm add @spextion/icons
```

### For React Native/Expo

```bash
npm install @spextion/icons react-native-svg
# or
yarn add @spextion/icons react-native-svg
# or
pnpm add @spextion/icons react-native-svg
```

For Expo projects, `react-native-svg` is usually already included. If not:

```bash
npx expo install react-native-svg
```

## Usage

### React Native / Expo

```tsx
import { View } from "react-native";
import { Home, User, Search, Heart } from "@spextion/icons";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Home size={24} color="#000" />
      <User size={32} color="#3b82f6" />
      <Search size={24} color="#10b981" />
      <Heart size={28} color="#ef4444" />
    </View>
  );
}
```

The package automatically uses the React Native versions (`.native.tsx` files) when bundled in a React Native/Expo project.

### Web (React/Next.js)

#### Basic Usage

```tsx
import { Home, User, Search } from "@spextion/icons";

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

#### With Next.js App Router

```tsx
"use client";

import { Heart, Settings } from "@spextion/icons";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Heart className="text-red-500 hover:text-red-600 transition-colors" />
      <Settings size={28} className="text-gray-700" />
    </div>
  );
}
```

#### With Tailwind CSS

The icons work perfectly with Tailwind utility classes:

```tsx
import { Home } from "@spextion/icons";

export default function Navigation() {
  return (
    <Home className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer" />
  );
}
```

## Props

### Common Props (Web & React Native)

| Prop   | Type               | Default | Description                            |
| ------ | ------------------ | ------- | -------------------------------------- |
| `size` | `number \| string` | `24`    | Sets both width and height of the icon |
| `color`| `string`          | `"currentColor"` (web) / `"#000"` (native) | Icon stroke color |

### Web-Only Props

| Prop        | Type                      | Default | Description                                           |
| ----------- | ------------------------- | ------- | ----------------------------------------------------- |
| `className` | `string`                  | `''`    | Additional CSS classes (Tailwind classes work great!) |
| `...props`  | `SVGProps<SVGSVGElement>` | -       | Any valid SVG element props                           |

### React Native-Only Props

| Prop            | Type                                      | Description                      |
| --------------- | ----------------------------------------- | -------------------------------- |
| `stroke`        | `string`                                  | Stroke color                     |
| `strokeWidth`   | `number \| string`                        | Stroke width                     |
| `fill`          | `string`                                  | Fill color                       |
| `opacity`       | `number \| string`                        | Icon opacity                     |
| `...props`      | React Native SVG props                    | Any valid react-native-svg props |

## Available Icons

- `Home`
- `User`
- `Search`
- `Heart`
- `Settings`

## Styling Examples

### React Native Styling

```tsx
import { View, StyleSheet } from "react-native";
import { Heart, User, Search } from '@spextion/icons';

export default function IconShowcase() {
  return (
    <View style={styles.container}>
      {/* Basic usage with color */}
      <Heart color="#ef4444" size={24} />

      {/* Custom stroke width */}
      <User color="#3b82f6" size={32} strokeWidth={2.5} />

      {/* With opacity */}
      <Search color="#10b981" size={24} opacity={0.7} />

      {/* Pressable icon */}
      <Pressable onPress={() => console.log('Pressed!')}>
        <Heart color="#ef4444" size={28} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
```

### Using Tailwind CSS Classes (Web)

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
import { Settings } from "@spextion/icons";

<Settings
  size={24}
  className="text-blue-500"
  style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
/>;
```

## TypeScript Support

All components are written in TypeScript and include full type definitions:

```tsx
import { IconProps } from "@spextion/icons";

// Use IconProps for custom wrapper components
const CustomIcon: React.FC<IconProps> = (props) => {
  return <Home {...props} />;
};
```

## Documentation

- [React Native/Expo Guide](REACT_NATIVE.md) - Detailed guide for mobile development
- [Platform Support](PLATFORM_SUPPORT.md) - How cross-platform support works
- [Changelog](CHANGELOG.md) - Version history and changes

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

When adding new icons, make sure to create both web (`.tsx`) and React Native (`.native.tsx`) versions.

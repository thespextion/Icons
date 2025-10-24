# Platform Support

This document explains how @spextion/icons works across different platforms.

## How It Works

@spextion/icons uses a dual-file approach to support both web and React Native:

- **Web files**: `*.tsx` - Regular React components using HTML `<svg>` elements
- **React Native files**: `*.native.tsx` - React Native components using `react-native-svg`

Metro bundler (React Native) and modern web bundlers automatically pick the correct version based on the platform.

## Supported Platforms

### ✅ Web
- React (Create React App, Vite, etc.)
- Next.js (Pages Router and App Router)
- Remix
- Gatsby
- Any modern React-based web framework

**Dependencies:**
- `react` (peer dependency)

### ✅ React Native
- React Native CLI projects
- Expo (managed and bare workflows)

**Dependencies:**
- `react` (peer dependency)
- `react-native-svg` (peer dependency, optional)

## Module Resolution

### Web
When bundlers like webpack, Vite, or Next.js bundle your code, they use:
```
package.json → "exports" → "import" or "require" → dist/index.mjs or dist/index.js
```

### React Native
Metro bundler uses:
```
package.json → "react-native" → src/index.ts → imports from src/icons/*.native.tsx
```

This is why we ship both `dist/` (compiled for web) and `src/` (source for React Native) folders.

## File Structure

```
@spextion/icons/
├── dist/                    # Compiled for web
│   ├── index.js            # CommonJS
│   ├── index.mjs           # ESM
│   ├── index.d.ts          # TypeScript definitions
│   └── index.d.mts         # ESM TypeScript definitions
│
├── src/                     # Source files (for React Native)
│   ├── index.ts            # Main entry
│   ├── types.ts            # TypeScript types
│   └── icons/
│       ├── Home.tsx        # Web version
│       ├── Home.native.tsx # React Native version
│       ├── User.tsx
│       ├── User.native.tsx
│       └── ... (other icons)
```

## Testing Platform Compatibility

### Test on Web
```bash
# In your Next.js or React project
npm install @spextion/icons
```

```tsx
import { Home } from "@spextion/icons";

function App() {
  return <Home className="text-blue-500" size={24} />;
}
```

### Test on React Native
```bash
# In your Expo or React Native project
npm install @spextion/icons react-native-svg
```

```tsx
import { Home } from "@spextion/icons";

function App() {
  return <Home color="#3b82f6" size={24} />;
}
```

## Known Limitations

1. **Tailwind Classes**: Only work on web. Use the `color` prop on React Native.
2. **className prop**: Only available on web. React Native doesn't support className.
3. **currentColor**: Works differently:
   - Web: Inherits from CSS color
   - React Native: Must be explicitly passed as a color value

## Troubleshooting

### "Cannot find module" error on React Native

Make sure your Metro bundler config supports `.native.tsx` extensions:

```js
// metro.config.js
module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
  },
};
```

### Icons not rendering on React Native

Ensure `react-native-svg` is installed:

```bash
npm install react-native-svg
# For React Native CLI, also run:
cd ios && pod install && cd ..
```

### TypeScript errors

Install React and React Native types:

```bash
npm install --save-dev @types/react @types/react-native
```

## Contributing

When adding new icons:

1. Create both `.tsx` (web) and `.native.tsx` (React Native) versions
2. Use HTML `<svg>` for web versions
3. Use `react-native-svg` components for native versions
4. Export from `src/icons/index.ts`
5. Test on both web and React Native

## Future Enhancements

- [ ] Support for more SVG features (gradients, filters, etc.)
- [ ] Animation support
- [ ] Icon color variants (outlined, filled, two-tone)
- [ ] Icon builder/customization tool
- [ ] More icons!

## Questions?

Open an issue at [GitHub](https://github.com/thespextion/Icons/issues)

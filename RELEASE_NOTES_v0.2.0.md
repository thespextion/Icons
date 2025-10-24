# Release Notes - v0.2.0

## 🎉 React Native & Expo Support!

We're excited to announce that **@spextion/icons v0.2.0** now supports **React Native and Expo**! Your favorite icons can now be used across web and mobile platforms with zero configuration.

## What's New

### Cross-Platform Support
- ✅ Works seamlessly on **Web** (React/Next.js)
- ✅ Works seamlessly on **Mobile** (React Native/Expo)
- ✅ Automatic platform detection - no configuration needed!

### New Features
- Platform-specific implementations using `react-native-svg` for mobile
- `color` prop now available on all platforms
- Comprehensive documentation for React Native developers
- Source files included for optimal React Native bundling

### Installation

**For Expo:**
```bash
npx expo install @spextion/icons react-native-svg
```

**For React Native CLI:**
```bash
npm install @spextion/icons react-native-svg
```

### Usage Example

```tsx
import { View } from "react-native";
import { Home, Heart, Search } from "@spextion/icons";

export default function App() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      <Home size={24} color="#000" />
      <Heart size={24} color="#ef4444" />
      <Search size={24} color="#10b981" />
    </View>
  );
}
```

## Documentation

- 📱 [React Native Guide](REACT_NATIVE.md) - Complete guide for mobile
- 🔧 [Platform Support](PLATFORM_SUPPORT.md) - Technical details
- ⚡ [Quick Start](QUICKSTART.md) - Get started in 2 minutes
- 📝 [Changelog](CHANGELOG.md) - Full version history

## Breaking Changes

⚠️ **None!** This is a fully backward-compatible release. All existing web implementations continue to work exactly as before.

## Migration Guide

No migration needed! If you're already using v0.1.0 on web, just update:

```bash
npm install @spextion/icons@latest
```

Everything continues to work as before, with the added benefit of React Native support.

## Available Icons

All 5 icons now work on both platforms:
- `Home` - House icon
- `User` - User profile icon
- `Search` - Magnifying glass
- `Heart` - Heart/like icon
- `Settings` - Gear/settings icon

## Package Stats

- **Package Size**: ~5.4 KB
- **Unpacked Size**: ~25.9 KB
- **Files**: 19 total (dist + src)
- **Platforms**: Web + React Native

## What's Next?

We're planning to add:
- More icon variants (outlined, filled, two-tone)
- Animation support
- More icons!

## Feedback

Found a bug or have a feature request? Please [open an issue](https://github.com/thespextion/Icons/issues) on GitHub.

---

**Full Changelog**: [CHANGELOG.md](CHANGELOG.md)

Thank you for using @spextion/icons! 🚀

# Quick Start Guide

Get started with @spextion/icons in under 2 minutes!

## For React Native / Expo

### 1. Install

```bash
npx expo install @spextion/icons react-native-svg
```

### 2. Use

```tsx
import { View } from "react-native";
import { Home, Heart } from "@spextion/icons";

export default function App() {
  return (
    <View>
      <Home size={24} color="#000" />
      <Heart size={24} color="#ef4444" />
    </View>
  );
}
```

### 3. That's it! 🎉

**Common props:**
- `size`: Icon size (default: 24)
- `color`: Icon color (default: "currentColor")
- `strokeWidth`: Line thickness (default: 2)

[→ Full React Native Guide](REACT_NATIVE.md)

---

## For Web (Next.js / React)

### 1. Install

```bash
npm install @spextion/icons
```

### 2. Use

```tsx
import { Home, Heart } from "@spextion/icons";

export default function App() {
  return (
    <div>
      <Home size={24} className="text-gray-900" />
      <Heart size={24} className="text-red-500" />
    </div>
  );
}
```

### 3. That's it! 🎉

**Common props:**
- `size`: Icon size (default: 24)
- `className`: CSS classes (Tailwind supported!)
- `color`: Override color

[→ Full Documentation](README.md)

---

## Available Icons

```tsx
import {
  Home,      // House icon
  User,      // User profile icon
  Search,    // Magnifying glass
  Heart,     // Heart/like icon
  Settings   // Gear/settings icon
} from "@spextion/icons";
```

More icons coming soon!

---

## Need Help?

- React Native issues? → [REACT_NATIVE.md](REACT_NATIVE.md)
- Platform-specific questions? → [PLATFORM_SUPPORT.md](PLATFORM_SUPPORT.md)
- Bug reports → [GitHub Issues](https://github.com/thespextion/Icons/issues)

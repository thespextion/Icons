# Using @spextion/icons with React Native and Expo

This guide shows you how to use @spextion/icons in your React Native and Expo projects.

## Installation

### For Expo Projects

```bash
npx expo install @spextion/icons react-native-svg
```

### For React Native CLI Projects

```bash
npm install @spextion/icons react-native-svg
# or
yarn add @spextion/icons react-native-svg
```

Then follow the [react-native-svg installation guide](https://github.com/software-mansion/react-native-svg#installation) for platform-specific setup.

## How It Works

The package automatically detects when you're using React Native and imports the `.native.tsx` versions of the icons, which are built with `react-native-svg`. You don't need to do anything special - just import and use!

## Basic Usage

```tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { Home, User, Search, Heart, Settings } from "@spextion/icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Home size={24} color="#000" />
      <User size={28} color="#3b82f6" />
      <Search size={24} color="#10b981" />
      <Heart size={26} color="#ef4444" />
      <Settings size={24} color="#8b5cf6" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#fff",
  },
});
```

## Props

All icons accept these props:

| Prop          | Type               | Default         | Description                     |
| ------------- | ------------------ | --------------- | ------------------------------- |
| `size`        | `number \| string` | `24`            | Icon width and height           |
| `color`       | `string`           | `"currentColor"`| Icon stroke color               |
| `strokeWidth` | `number \| string` | `2`             | Stroke width                    |
| `opacity`     | `number \| string` | `1`             | Icon opacity (0-1)              |
| `fill`        | `string`           | `"none"`        | Fill color                      |

Plus any other props from `react-native-svg`.

## Examples

### Interactive Icons

```tsx
import { Pressable, View, Text } from "react-native";
import { Heart } from "@spextion/icons";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={() => setLiked(!liked)}>
      <Heart
        size={32}
        color={liked ? "#ef4444" : "#9ca3af"}
        fill={liked ? "#ef4444" : "none"}
      />
    </Pressable>
  );
}
```

### Animated Icons

```tsx
import { Animated } from "react-native";
import { Settings } from "@spextion/icons";

function AnimatedIcon() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate }] }}>
      <Settings size={32} color="#3b82f6" />
    </Animated.View>
  );
}
```

### Navigation Icons (React Navigation)

```tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, User, Search, Settings } from "@spextion/icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: Home,
            Profile: User,
            Search: Search,
            Settings: Settings,
          };

          const Icon = icons[route.name];
          return <Icon size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
```

### Styling with Custom Props

```tsx
import { View } from "react-native";
import { Heart, User } from "@spextion/icons";

function StyledIcons() {
  return (
    <View style={{ flexDirection: "row", gap: 16 }}>
      {/* Thin stroke */}
      <Heart size={32} color="#ef4444" strokeWidth={1} />

      {/* Thick stroke */}
      <User size={32} color="#3b82f6" strokeWidth={3} />

      {/* With opacity */}
      <Heart size={32} color="#10b981" opacity={0.5} />

      {/* Filled */}
      <Heart size={32} color="#ef4444" fill="#ef4444" />
    </View>
  );
}
```

## Available Icons

- `Home` - Home/house icon
- `User` - User profile icon
- `Search` - Search/magnifying glass icon
- `Heart` - Heart/like icon
- `Settings` - Settings/gear icon

## Troubleshooting

### Icons not showing up?

Make sure `react-native-svg` is properly installed:

```bash
# For Expo
npx expo install react-native-svg

# For React Native CLI
npm install react-native-svg
cd ios && pod install && cd ..
```

### TypeScript errors?

Make sure you have the latest version of `@types/react` and `@types/react-native`:

```bash
npm install --save-dev @types/react @types/react-native
```

### Icons rendering as `[object Object]`?

This usually means `react-native-svg` is not properly linked. Try:

```bash
# For React Native CLI
cd ios && pod install && cd ..
npx react-native run-ios
# or
npx react-native run-android
```

## Contributing

Found a bug or want to add more icons? Please open an issue or PR at [our GitHub repo](https://github.com/thespextion/Icons).

## License

MIT

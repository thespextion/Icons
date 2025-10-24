# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-01-24

### Added

- **React Native and Expo support!** 🎉
- Platform-specific icon implementations (`.native.tsx` files using `react-native-svg`)
- Automatic platform detection - Metro bundler uses native versions, web bundlers use web versions
- `color` prop for both web and React Native
- Comprehensive React Native documentation ([REACT_NATIVE.md](REACT_NATIVE.md))
- Platform support documentation ([PLATFORM_SUPPORT.md](PLATFORM_SUPPORT.md))
- Quick start guide ([QUICKSTART.md](QUICKSTART.md))
- Source files (`src/`) now included in package for React Native module resolution

### Changed

- Removed `react-dom` from peer dependencies (not needed for React Native)
- Added `react-native-svg` as optional peer dependency
- Updated package.json with `react-native` field pointing to source files
- Updated types to support both web (SVG) and native (react-native-svg) props
- Expanded README with cross-platform examples

### Fixed

- TypeScript type compatibility between web and React Native versions

## [0.1.0] - 2025-01-23

### Initial Release

- Initial release of @spextion/icons
- 5 base icons: Home, User, Search, Heart, Settings
- TypeScript support with full type definitions
- Tailwind CSS support for web
- Web support (React/Next.js)
- Tree-shaking support - only bundle icons you use
- Customizable size and className props
- SVG-based for crisp rendering at any size
- ESM and CommonJS builds

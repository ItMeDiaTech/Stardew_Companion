# Stardew Companion

A local desktop companion application for Stardew Valley built with Electron and TypeScript. Track villager gift preferences, manage friendships, and optimize your farming strategy!

## Application Features

### Villager Gift Tracker
- **Complete Database** - All 34 giftable villagers with gift preferences and locations
- **Visual Portraits** - Each villager has their own portrait image
- **Gift Categories** - View loved and hated gifts for each villager
- **Search & Filter** - Find villagers by name, location, gender, marriageability, or gifts
- **Detailed View** - Click any villager for complete information including birthday, location, and description

### All Giftable Villagers (34 Total)

**Marriage Candidates (12):**
- **Bachelors (6):** Alex, Elliott, Harvey, Sam, Sebastian, Shane
- **Bachelorettes (6):** Abigail, Emily, Haley, Leah, Maru, Penny

**Other Villagers (22):**
- **Adults:** Caroline, Clint, Demetrius, Dwarf, Evelyn, George, Gus, Jodi, Kent, Krobus, Leo, Lewis, Linus, Marnie, Pam, Pierre, Robin, Sandy, Willy, Wizard
- **Children:** Jas, Vincent

## Technical Features

✅ **TypeScript Throughout** - Fully typed codebase for safety and maintainability
✅ **Auto-Updates** - Seamless updates from GitHub releases using electron-updater
✅ **Secure IPC** - Context-isolated communication between processes
✅ **Modern UI** - Dark-themed interface with custom window controls
✅ **Cross-Platform** - Supports Windows, macOS, and Linux
✅ **Production-Ready** - Complete build and distribution setup

## Tech Stack

- **[Electron](https://electronjs.org/)** - Desktop application framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Webpack](https://webpack.js.org/)** - Module bundler
- **[electron-updater](https://www.electron.build/auto-update)** - Auto-update system
- **[electron-builder](https://www.electron.build/)** - Build and packaging

## Project Structure

```
Stardew_Companion/
├── src/
│   ├── main/          # Main process (Node.js environment)
│   ├── renderer/      # Renderer process (UI)
│   ├── preload/       # IPC bridge
│   └── shared/        # Shared types and constants
├── build/             # Build resources (icons)
├── dist/              # Compiled output
├── release/           # Built packages
└── claude.md          # Project documentation
```

Each directory contains a `claude.md` file with detailed documentation.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/stardew-companion.git
cd stardew-companion

# Install dependencies
npm install
```

### Development

```bash
# Start development mode
npm run dev

# In another terminal, start Electron
npm start
```

The app will load from `http://localhost:8080` with hot reload enabled.

### Building

```bash
# Build for production
npm run build

# Package the app (no publish)
npm run package

# Platform-specific builds
npm run package:win    # Windows
npm run package:mac    # macOS
npm run package:linux  # Linux
```

Built packages will be in the `release/` directory.

## Auto-Update Setup

### 1. GitHub Repository

Create a GitHub repository for your app.

### 2. Update Configuration

Edit `package.json` and `electron-builder.yml`:

```json
// package.json
{
  "build": {
    "publish": {
      "provider": "github",
      "owner": "your-github-username",
      "repo": "stardew-companion"
    }
  }
}
```

### 3. Create GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` scope
3. Copy the token

### 4. Publish Release

```bash
# Set GitHub token
export GH_TOKEN="your-github-token"

# Build and publish
npm run publish
```

This will:
- Build the app
- Create a GitHub release
- Upload installers as release assets
- Future app launches will check for updates

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start webpack in watch mode |
| `npm start` | Launch Electron app |
| `npm run build` | Production build |
| `npm run package` | Build and package app |
| `npm run package:win` | Build for Windows |
| `npm run package:mac` | Build for macOS |
| `npm run package:linux` | Build for Linux |
| `npm run publish` | Build and publish to GitHub |

## Architecture

### Three-Process Model

1. **Main Process** - Node.js environment, window management, system access
2. **Renderer Process** - Browser environment, UI rendering
3. **Preload Script** - Secure bridge between main and renderer

### Security

- ✅ Context isolation enabled
- ✅ Node integration disabled in renderer
- ✅ Secure IPC via contextBridge
- ✅ Content Security Policy configured

### Communication Flow

```
Renderer → electronAPI (preload) → IPC → Main Process
Main Process → IPC → Renderer (events)
```

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies, scripts, build config |
| `tsconfig.json` | TypeScript configuration |
| `webpack.main.config.js` | Main process build config |
| `webpack.renderer.config.js` | Renderer process build config |
| `electron-builder.yml` | Packaging and distribution |

## Adding Features

### 1. Define Types

Add to `src/shared/types.ts`:
```typescript
export interface MyFeature {
  field: string;
}

export const IPC_CHANNELS = {
  // ... existing
  MY_CHANNEL: 'my:channel',
} as const;
```

### 2. Add Main Process Handler

In `src/main/index.ts`:
```typescript
ipcMain.handle(IPC_CHANNELS.MY_CHANNEL, async (event, arg) => {
  // Implementation
  return result;
});
```

### 3. Expose in Preload

In `src/preload/index.ts`:
```typescript
myMethod: (arg: string): Promise<Result> => {
  return ipcRenderer.invoke(IPC_CHANNELS.MY_CHANNEL, arg);
}
```

### 4. Use in Renderer

In `src/renderer/index.ts`:
```typescript
const result = await window.electronAPI.myMethod(arg);
```

## Villager Portraits

Portrait images for villagers should be placed in `src/renderer/assets/portraits/`:

- Download from Stardew Valley Wiki: https://stardewvalleywiki.com/
- Format: PNG (recommended 128x128px)
- Naming: lowercase name (e.g., `alex.png`, `abigail.png`)

See `src/renderer/assets/portraits/.gitkeep` for the complete list.

## Icons

Place app icons in the `build/` directory:

- `icon.ico` - Windows (256x256)
- `icon.icns` - macOS (512x512@2x)
- `icon.png` - Linux (512x512)

See `build/claude.md` for detailed icon requirements.

## Troubleshooting

### Auto-update not working

- Ensure `GH_TOKEN` is set when publishing
- Check GitHub release was created
- Verify app is not in development mode
- Check console for update errors

### Build fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript errors

```bash
# Check TypeScript version
npx tsc --version

# Rebuild
npm run build
```

## Documentation

Detailed documentation is available in `claude.md` files:

- `/claude.md` - Project overview
- `/src/main/claude.md` - Main process
- `/src/renderer/claude.md` - Renderer process
- `/src/preload/claude.md` - Preload script
- `/src/shared/claude.md` - Shared types
- `/src/shared/data/claude.md` - Game data documentation
- `/build/claude.md` - Build resources

## License

MIT

## Contributing

Contributions are welcome! Please read the documentation in `claude.md` files before contributing.

## Roadmap

**Completed:**
- [x] Villager gift tracker with all 34 giftable villagers
- [x] Complete database of 12 marriage candidates + 22 other villagers
- [x] Search and filter functionality (by name, location, marriageability)
- [x] Visual portraits for each villager
- [x] Gift preferences (loved/hated) for all villagers
- [x] Location information for finding villagers

**Planned:**
- [ ] Detailed schedules (time/location throughout the day)
- [ ] Complete gift preference lists (liked, neutral, disliked categories)
- [ ] Friendship level tracking
- [ ] Birthday reminder system
- [ ] Bundle completion tracker
- [ ] Crop planning calendar
- [ ] Save file parsing and analysis

---

**Status**: ✅ Complete villager database (34/34)! Ready for schedule & advanced features.

# Stardew Companion

A comprehensive desktop companion application for Stardew Valley built with Electron and TypeScript. Track villager relationships, browse items, manage notes, calculate crop profits, and optimize your farming strategy!

## Features

### 🎁 Villager Gift Tracker
- **Complete Database** - All 34 giftable villagers with full gift preferences
- **Visual Portraits** - High-quality portrait for each villager
- **Gift Categories** - View loved, liked, neutral, disliked, and hated gifts
- **Smart Search & Filter** - Find villagers by name, location, gender, or marriageability
- **Detailed Information** - Birthdays, locations, descriptions, and schedules

### 📦 Items Browser
- **444 Items** - Comprehensive database including weapons, boots, rings & more
- **Equipment Database** - 62 Weapons, 18 Boots, 28 Rings with complete stats
- **Multiple Categories** - Minerals (53), Artifacts (42), Fish (41), Forage (33), Equipment, Geodes
- **Equipment Stats** - Damage, defense, immunity, special abilities for all gear
- **Source Information** - Know exactly where to find each item
- **Monster Drops** - Complete list with drop rates and floor locations
- **Filter by Source** - Browse by forage locations, fishing spots, mining areas, shops, monster drops
- **Detailed Modal View** - Click any item for complete information including stats

### 🏪 Shops Browser
- **All Shops** - Complete list with operating hours and locations
- **Item Catalog** - Browse everything each shop sells with prices
- **Seasonal Availability** - See which items are available in each season
- **Search & Filter** - Find items and shops quickly

### 📅 Calendar & Events
- **Festivals** - All seasonal festivals with dates and locations
- **Birthdays** - Never miss a villager's birthday
- **Event Details** - Times, requirements, and what to bring
- **Filter by Season** - View events for specific seasons

### 🔨 Crafting Guide
- **Complete Recipe List** - All crafting and cooking recipes
- **Material Sources** - Where to find each ingredient
- **Unlock Requirements** - Know what you need to unlock recipes
- **Category Filters** - Browse by crafting station or recipe type

### 📝 Notes
- **Personal Note-Taking** - Create and manage your own notes
- **Auto-Save** - Never lose your progress
- **Search** - Find notes by title or content
- **Persistent Storage** - Data saved locally and survives app updates

### ✅ Daily Tasks
- **Task Checklist** - Track your daily Stardew Valley routine
- **Progress Tracking** - Visual progress bar shows completion
- **Quick-Add Templates** - Common tasks (water crops, pet animals, etc.)
- **Reorder & Customize** - Organize tasks your way
- **Reset Function** - Start fresh each day

### 💰 Crop Profit Calculator
- **40+ Crops** - All crops from Spring, Summer, Fall, and special crops
- **Advanced Calculations** - Profit per day, total profit, ROI percentage
- **Farming Bonuses** - Account for farming level, Tiller profession, quality multipliers
- **Season Planning** - Input current day to see max harvests remaining
- **Smart Indicators** - Highlights top 3 crops, multi-harvest crops, and late planting warnings

## All Villagers (34 Total)

**Marriage Candidates (12):**
- **Bachelors (6):** Alex, Elliott, Harvey, Sam, Sebastian, Shane
- **Bachelorettes (6):** Abigail, Emily, Haley, Leah, Maru, Penny

**Other Villagers (22):**
Caroline, Clint, Demetrius, Dwarf, Evelyn, George, Gus, Jas, Jodi, Kent, Krobus, Leo, Lewis, Linus, Marnie, Pam, Pierre, Robin, Sandy, Vincent, Willy, Wizard

## Technical Features

✅ **TypeScript** - Fully typed for reliability
✅ **Auto-Updates** - Seamless updates from GitHub releases
✅ **Secure Architecture** - Context-isolated, secure IPC communication
✅ **Modern UI** - Dark theme with custom window controls
✅ **Cross-Platform** - Windows, macOS, and Linux support
✅ **Offline-First** - All data stored locally, no internet required

## Tech Stack

- **[Electron](https://electronjs.org/)** - Desktop application framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Webpack](https://webpack.js.org/)** - Module bundling
- **[electron-updater](https://www.electron.build/auto-update)** - Auto-update system
- **[electron-builder](https://www.electron.build/)** - Build and packaging

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

## Distribution

### Creating Releases

1. Update version in `package.json`
2. Create a GitHub release with the new version tag
3. Build and publish:

```bash
# Set GitHub token
export GH_TOKEN="your-github-token"

# Build and publish to GitHub
npm run publish
```

This will:
- Build the application
- Create installers for all platforms
- Upload to GitHub releases
- Enable auto-update for users

### Auto-Updates

The app automatically checks for updates on launch and downloads them in the background. Users are notified when an update is ready to install.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development with hot reload |
| `npm start` | Launch Electron application |
| `npm run build` | Production build |
| `npm run package` | Build and package (no publish) |
| `npm run package:win` | Build for Windows only |
| `npm run package:mac` | Build for macOS only |
| `npm run package:linux` | Build for Linux only |
| `npm run publish` | Build and publish to GitHub |

## Project Structure

```
Stardew_Companion/
├── src/
│   ├── main/          # Main process (Node.js)
│   ├── renderer/      # Renderer process (UI)
│   ├── preload/       # IPC bridge
│   └── shared/        # Shared types and data
├── build/             # App icons and resources
├── dist/              # Compiled output
└── release/           # Built installers
```

## Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and build configuration |
| `tsconfig.json` | TypeScript compiler options |
| `webpack.main.config.js` | Main process build config |
| `webpack.renderer.config.js` | Renderer process build config |
| `electron-builder.yml` | Packaging and distribution settings |

## Data Sources

All game data is sourced from the official [Stardew Valley Wiki](https://stardewvalleywiki.com/) and verified for accuracy.

## Roadmap

**Current Version (v0.7.0):**
- [x] Villager gift tracker (34 villagers)
- [x] Items browser (444 items)
- [x] Complete equipment database (62 weapons, 18 boots, 28 rings)
- [x] Equipment stats and monster drops
- [x] Shops browser
- [x] Calendar & events
- [x] Crafting guide
- [x] Notes system
- [x] Daily tasks
- [x] Crop profit calculator

**Planned Features:**
- [ ] Expanded cooking recipes (80+ dishes)
- [ ] Detailed villager schedules (hour-by-hour)
- [ ] Friendship level tracking
- [ ] Bundle completion tracker
- [ ] Fish timing guide (season, weather, time)
- [ ] Community center planner
- [ ] Save file import and analysis

## Contributing

Contributions are welcome! This project follows standard Git workflow:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Acknowledgments

- Game data from [Stardew Valley Wiki](https://stardewvalleywiki.com/)
- Built with [Electron](https://electronjs.org/)
- Villager portraits from the official game assets

---

**Status**: v0.7.0 - Complete equipment database with 444 items! ⚔️🎉

# 🏆 Sports League Database

A modern, responsive Vue.js application for browsing sports leagues from around the world. Built with Vue 3, TypeScript, Vuetify, and Pinia for state management.

## ✨ Features

- **League Browsing**: View comprehensive list of sports leagues
- **Search & Filter**: Search by league name and filter by sport type
- **League Badges**: View season badges for each league with modal display
- **Responsive Design**: Mobile-first design that works on all devices
- **Caching**: Caching of league badges to reduce API calls
- **Scroll to Top**: Floating action button for easy navigation
- **TypeScript**: Type safety throughout the application

## 🛠️ Technologies Used

- **Vue 3** - JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vuetify 3** - Material Design component framework
- **Pinia** - State management for Vue
- **Axios** - HTTP client for API requests
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ydarbharas/sporty-group-fe-assignment.git
   cd sporty-group-fe-assignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.development` file in the root directory:

   ```env
   VITE_BACKEND_BASE_URL=your_api_base_url_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── api/
│   └── api.ts              # API service functions
├── components/
│   ├── EmptyListState.vue  # Loading and error states
│   ├── FilterBar.vue       # Search and filter controls
│   ├── LeagueBadgeDialog.vue # Modal for league badges
│   ├── LeagueCard.vue      # Individual league card
│   ├── LeagueList.vue      # League grid display
│   ├── NavBar.vue          # Navigation header
│   └── ScrollToTopFab.vue  # Scroll to top button
├── stores/
│   └── leagueStore.ts      # Pinia store for state management
├── types/
│   └── index.ts            # TypeScript type definitions
├── utils/
│   └── sportsTypeMeta.ts   # Sport-specific styling data
├── App.vue                 # Main application component
└── main.ts                 # Application entry point
```

## 🎯 Key Features Explained

### League Management

- Fetches leagues from SportsDB API
- Displays leagues in a responsive grid
- Each league shows sport type, name, and alternate names

### Search & Filtering

- Real-time search by league name
- Filter dropdown by sport type
- Combined filtering for precise results

### Badge System

- Fetches season badges for each league
- Caching to avoid redundant API calls
- Modal display with season information
- Fallback handling for missing badges

### Responsive Design

- Mobile-first approach
- Adaptive layout for different screen sizes
- Touch-friendly interface

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Theme Colors

The primary color can be customized in `src/main.ts`:

```typescript
theme: {
  themes: {
    light: {
      colors: {
        primary: '#E41826',
      },
    },
  },
}
```

### Sport Styling

Add new sports and their styling in `src/utils/sportsTypeMeta.ts`:

```typescript
export const sportsTypeMeta: SportMetaMap = {
  'New Sport': { color: 'purple-darken-1', icon: 'mdi-sport-icon' },
}
```

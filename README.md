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

## 🎨 Design Decisions

### Layout & User Experience

- **Grid Layout for League Cards**: Chosen for optimal responsiveness across different screen sizes
- **Coloured Sport Chips**: Different coloured chips for each sport type to help users quickly differentiate between sports
- **Modal for League Badges**: Badges are displayed in a modal rather than inline to maintain consistent card formatting, as badges can vary significantly in size
- **Floating Action Button (FAB)**: Scroll-to-top button for easy access to filtering controls, especially useful when the league list becomes longer
- **Grey Background for Badges**: Ensures all badges are visible regardless of their original colour scheme (some badges are light-coloured and would be hard to see on white backgrounds)

### Technical Architecture

- **Component-Based Structure**: Modular components for maintainability and reusability
- **Centralised State Management**: Using Pinia for predictable state management
- **Type Safety**: Full TypeScript implementation for better development experience and error prevention
- **API Caching**: Intelligent caching of league badges to minimise redundant API calls

## 🤖 AI Tools Used

### Development Assistance

- **Cursor IDE**: Used for initial project setup and scaffolding, code reviewing, and improving type safety throughout the development process
- **ChatGPT**: Efficient Vuetify documentation Q&A - the Vuetify documentation can be unintuitive, so ChatGPT provided quicker and easier access to classes, component usage and best practices. Also used for README support and code polishing

## 📋 Assumptions

### API Assumptions

- **Well-formed Responses**: The SportsDB API is assumed to always return well-formed JSON responses with the expected data structure
- **Proper HTTP Errors**: The API is expected to return appropriate HTTP status codes and error messages for failed requests
- **Data Consistency**: League and season data is assumed to be consistent and reliable
- **Availability**: The API is assumed to be generally available and responsive

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

## 🎨 Customisation

### Theme Colours

The primary colour can be customised in `src/main.ts`:

```typescript
theme: {
  themes: {
    light: {
      colours: {
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
  'New Sport': { colour: 'purple-darken-1', icon: 'mdi-sport-icon' },
}
```

## 🚀 Suggested Improvements

### User Experience Enhancements

- **Skeleton Loader**: Implement skeleton loading states for the league list to provide better visual feedback during data fetching
- **Unit Testing**: Introduce comprehensive unit tests using Jest for component testing - whilst the application is currently small, unit testing will be crucial for larger applications and team development

### Technical Enhancements

- **Error Boundaries**: Implement Vue error boundaries for better error handling
- **Accessibility**: Add ARIA labels and keyboard navigation support
- **Performance**: Implement virtual scrolling for large league lists
- **Internationalisation**: Add multi-language support for global users

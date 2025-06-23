// API Response Types
export interface League {
  idLeague: string
  strLeague: string
  strSport: string
  strLeagueAlternate: string
}

export interface Season {
  strSeason: string
  strBadge: string | null
}

export interface BadgeDetails {
  badgeUrl: string | null
  badgeSeason: string | null
}

// API Response Types
export interface LeaguesResponse {
  leagues: League[]
}

export interface SeasonsResponse {
  seasons: Season[]
}

// Store State Types
export interface LeagueState {
  leagues: League[]
  searchQuery: string
  selectedSport: string
  badgeCache: Map<string, BadgeDetails>
  loading: boolean
  error: string | null
}

// Component Props Types
export interface LeagueCardProps {
  league: League
}

export interface LeagueBadgeDialogProps {
  modelValue: boolean
  badgeUrl: string
  league: League
  badgeSeason: string | null
}

export interface EmptyListStateProps {
  loading: boolean
  error: string | null
  noFilteredLeagues: boolean
}

// Sport Meta Types
export interface SportMeta {
  color: string
  icon: string
}

export interface SportMetaMap {
  [key: string]: SportMeta
}

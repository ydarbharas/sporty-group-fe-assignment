import axios from 'axios'
import type { League, Season, LeaguesResponse, SeasonsResponse } from '@/types'

const backend = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 10000,
})

export const fetchAllLeagues = async (): Promise<League[]> => {
  const response = await backend.get<LeaguesResponse>('all_leagues.php')
  return response.data.leagues
}

export const fetchSeasonsWithBadges = async (leagueId: string): Promise<Season[]> => {
  const response = await backend.get<SeasonsResponse>(
    `search_all_seasons.php?badge=1&id=${encodeURIComponent(leagueId)}`,
  )
  return response.data.seasons
}

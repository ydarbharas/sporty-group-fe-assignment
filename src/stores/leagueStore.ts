import { defineStore } from 'pinia'
import * as api from '@/api/api'
import type { League, BadgeDetails, LeagueState } from '@/types'

export const useLeagueStore = defineStore('league', {
  state: (): LeagueState => ({
    leagues: [],
    searchQuery: '',
    selectedSport: '',
    badgeCache: new Map<string, BadgeDetails>(),
    loading: false,
    error: null,
  }),

  getters: {
    sportTypes: (state): string[] => {
      const sports = new Set(state.leagues.map((league) => league.strSport))
      return Array.from(sports).sort()
    },

    filteredLeagues: (state): League[] => {
      return state.leagues.filter((league) => {
        const matchesSearch = league.strLeague
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase())
        const matchesSport = !state.selectedSport || league.strSport === state.selectedSport
        return matchesSearch && matchesSport
      })
    },
  },

  actions: {
    async fetchLeagues(): Promise<void> {
      this.loading = true
      this.error = null
      try {
        this.leagues = await api.fetchAllLeagues()
      } catch (error: any) {
        this.error = error?.message || 'Failed to fetch leagues.'
        console.error('Error fetching leagues:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchSeasonBadge(leagueId: string): Promise<BadgeDetails> {
      const cached = this.badgeCache.get(leagueId)
      if (cached) return cached

      try {
        const seasons = await api.fetchSeasonsWithBadges(leagueId)
        if (!seasons?.length) return { badgeUrl: null, badgeSeason: null }

        const found = [...seasons].reverse().find((s) => s.strBadge)
        const season = found || seasons[seasons.length - 1]
        const details: BadgeDetails = {
          badgeUrl: season?.strBadge ?? null,
          badgeSeason: season?.strSeason ?? null,
        }
        this.badgeCache.set(leagueId, details)
        return details
      } catch (error) {
        console.error('Error fetching season badge:', error)
        return { badgeUrl: null, badgeSeason: null }
      }
    },

    setSearchQuery(query: string): void {
      this.searchQuery = query
    },

    setSelectedSport(sport: string): void {
      this.selectedSport = sport
    },
  },
})

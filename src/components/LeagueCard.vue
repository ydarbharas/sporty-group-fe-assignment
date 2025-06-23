<!-- LeagueCard.vue -->
<template>
  <v-card elevation="2" :ripple="false" class="d-flex flex-column">
    <v-card-item>
      <v-chip :color="getSportMeta(league.strSport).color" size="x-small" variant="outlined">
        <v-icon start>{{ getSportMeta(league.strSport).icon }}</v-icon>
        {{ league.strSport }}
      </v-chip>
      <v-card-title class="my-1 wrap-title text-subtitle-1 font-weight-bold">{{
        league.strLeague
      }}</v-card-title>
      <v-card-text v-if="league.strLeagueAlternate" class="text-grey text-caption font-italic pa-0">
        Also known as: {{ league.strLeagueAlternate }}
      </v-card-text>
    </v-card-item>

    <v-spacer />

    <v-card-actions class="pa-4">
      <v-btn
        @click="loadBadge"
        :loading="loading"
        :disabled="badgeLoadAttempted && !badgeUrl"
        class="text-none"
        color="grey-lighten-3"
        size="small"
        variant="flat"
        block
      >
        {{ buttonText }}
      </v-btn>
    </v-card-actions>

    <LeagueBadgeDialog
      v-model="showBadgeDialog"
      :badgeUrl="badgeUrl"
      :league="league"
      :badgeSeason="badgeSeason"
    />
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLeagueStore } from '../stores/leagueStore'
import { sportsTypeMeta } from '../utils/sportsTypeMeta'
import LeagueBadgeDialog from './LeagueBadgeDialog.vue'
import type { LeagueCardProps, SportMeta } from '@/types'

const props = defineProps<LeagueCardProps>()
const store = useLeagueStore()
const badgeUrl = ref<string>('')
const badgeSeason = ref<string | null>(null)
const loading = ref<boolean>(false)
const badgeLoadAttempted = ref<boolean>(false)
const showBadgeDialog = ref<boolean>(false)

const loadBadge = async (): Promise<void> => {
  if (badgeUrl.value) {
    showBadgeDialog.value = true
    return
  }
  if (loading.value) return

  loading.value = true
  badgeLoadAttempted.value = true
  const { badgeUrl: url, badgeSeason: season } = await store.fetchSeasonBadge(props.league.idLeague)
  badgeUrl.value = url ?? ''
  badgeSeason.value = season
  loading.value = false

  if (badgeUrl.value && !loading.value) {
    showBadgeDialog.value = true
  }
}

const buttonText = computed((): string => {
  if (badgeLoadAttempted.value && !badgeUrl.value && !loading.value) {
    return 'No league badge available'
  }
  return 'View League Badge'
})

const getSportMeta = (sport: string): SportMeta => {
  if (sportsTypeMeta[sport]) return sportsTypeMeta[sport]
  return {
    color: 'gray',
    icon: 'mdi-whistle',
  }
}
</script>
<style>
.v-card-item__content {
  height: 100%;
}
</style>
<style scoped>
.wrap-title {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
}
</style>

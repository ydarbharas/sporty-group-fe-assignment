<template>
  <v-card class="pa-5">
    <v-row align="center">
      <v-col cols="12" sm="8">
        <v-text-field
          v-model="searchQuery"
          label="Enter league name"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          hide-details
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          v-model="selectedSport"
          @update:model-value="onSportSelect"
          :items="sportOptions"
          label="Filter by Sport"
          variant="outlined"
          density="compact"
          hide-details
          class="min-width-150"
        />
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { useLeagueStore } from '@/stores/leagueStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useLeagueStore()

const { sportTypes, searchQuery } = storeToRefs(store)
const selectedSport = storeToRefs(store).selectedSport

const sportOptions = computed(() => [
  { title: 'All Sports', value: '' },
  ...sportTypes.value.map((sport) => ({ title: sport, value: sport })),
])

const onSportSelect = () => {
  store.setSelectedSport(selectedSport.value)
}
</script>

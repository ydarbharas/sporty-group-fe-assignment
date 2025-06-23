<template>
  <div class="my-4">
    <v-row v-if="contentIsReady">
      <v-col
        v-for="league in filteredLeagues"
        :key="league.idLeague"
        cols="12"
        sm="4"
        md="3"
        class="d-flex"
      >
        <LeagueCard :league="league" class="flex-grow-1" />
      </v-col>
    </v-row>
    <EmptyListState
      v-else
      class="mt-10"
      :loading="loading"
      :error="error"
      :noFilteredLeagues="filteredLeagues.length === 0"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useLeagueStore } from '@/stores/leagueStore'
import { storeToRefs } from 'pinia'
import LeagueCard from './LeagueCard.vue'
import EmptyListState from './EmptyListState.vue'

const store = useLeagueStore()
const { filteredLeagues, loading, error } = storeToRefs(store)
const contentIsReady = computed(
  () => !loading.value && !error.value && filteredLeagues.value.length > 0,
)

onMounted(async () => {
  await store.fetchLeagues()
})
</script>

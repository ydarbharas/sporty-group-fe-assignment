<template>
  <v-app class="bg-grey-lighten-5">
    <NavBar />
    <v-main>
      <div class="text-center ma-8 text-grey-darken-4">
        <h2 class="pb-1">Sports League Database</h2>
        <div>Browse sports leagues from around the world. Filter by sport or search by name.</div>
      </div>
      <div class="mx-5">
        <FilterBar />
        <LeagueList />
      </div>

      <ScrollToTopFab />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import FilterBar from './components/FilterBar.vue'
import LeagueList from './components/LeagueList.vue'
import ScrollToTopFab from './components/ScrollToTopFab.vue'
</script>

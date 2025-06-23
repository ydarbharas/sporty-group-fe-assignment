<template>
  <div class="d-flex justify-center">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="#E41E27"
      size="100"
      class="ma-auto d-block"
    />
    <v-alert v-else-if="error" type="error" class="mb-4">
      {{ error }}
    </v-alert>
    <v-alert v-else-if="noFilteredLeagues" type="info" class="mb-4">
      No leagues found matching your criteria.
    </v-alert>
  </div>
</template>
<script setup lang="ts">
import type { EmptyListStateProps } from '@/types'

defineProps<EmptyListStateProps>()
</script>

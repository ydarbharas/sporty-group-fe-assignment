<template>
  <v-dialog
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    width="auto"
  >
    <v-card class="pa-4">
      <div class="d-flex align-center justify-space-between">
        <v-card-title class="font-weight-bold px-2">{{ league.strLeague }}</v-card-title>
        <v-btn icon="mdi-close" size="small" variant="text" @click="closeDialog" />
      </div>
      <div class="bg-grey-lighten-2 rounded-lg pa-5 my-5 mx-3">
        <v-img
          :src="badgeUrl"
          :alt="league.strLeague + ' badge'"
          width="200"
          height="200"
          cover
          class="mx-auto"
        />
      </div>

      <v-card-text v-if="badgeSeason" class="px-2 text-center font-italic text-weight-thin"
        >Season: {{ badgeSeason }}</v-card-text
      >
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { LeagueBadgeDialogProps } from '@/types'

const props = defineProps<LeagueBadgeDialogProps>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const closeDialog = () => {
  emit('update:modelValue', false)
}
</script>

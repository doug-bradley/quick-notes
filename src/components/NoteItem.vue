<template>
    <div class="w-96 border p-2 mb-2 rounded bg-gray-800 text-white">
      <div class="font-bold text-lg">{{ note.title }}</div>
      <div class="text-sm text-gray-400">{{ formattedTimestamp }}</div>
      <div class="mt-2">{{ note.content }}</div>
      <div class="mt-2 text-xs text-gray-400">
        <span :class="stateClass">{{ note.state }}</span>
        <span v-if="note.archived" class="ml-2 text-yellow-400">Archived</span>
        <span v-if="note.deleted" class="ml-2 text-red-400">Deleted</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';

  import type { Note } from '@/types/note';
  
  const props = defineProps<{ note: Note }>();
  
  const formattedTimestamp = computed(() => {
    const date = new Date(props.note.timestamp);
    return date.toLocaleString();
  });
  
  const stateClass = computed(() => {
    switch (props.note.state) {
      case 'new':
        return 'text-green-400';
      case 'active':
        return 'text-blue-400';
      case 'done':
        return 'text-gray-400';
      default:
        return '';
    }
  });
  </script>
  
  <style scoped>
  /* You can add additional styling here if needed */
  </style>
  
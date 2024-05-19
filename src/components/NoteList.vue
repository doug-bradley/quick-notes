<template>
    <div>
        <NoteItem v-for="(note, index) in notes" :key="index" :note="note" />
    </div>
</template>

<script setup lang="ts">
import NoteItem from './NoteItem.vue';
import type { Note } from '@/types/note';


const props = defineProps<{ notes: Note[] }>();
</script>
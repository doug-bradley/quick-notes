<template>
    <div class="container mx-auto p-4">
      <NoteEditor @saveNote="saveNote" />
      <NoteList :notes="notes" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import NoteEditor from './components/NoteEditor.vue';
  import NoteList from './components/NoteList.vue';
  import { notes as initialNotes } from '@/SampleData/Notes';
  import type { Note } from '@/types/note';
  
  
  const notes = ref<Note[]>(initialNotes.splice(0, 5));
  
  const saveNote = (note: Note) => {
    notes.value.push(note);
  };

  </script>
  
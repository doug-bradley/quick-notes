<template>
    <div class="mb-4">
      <textarea
        v-model="noteContent"
        class="w-full p-2 border rounded bg-gray-800 text-white placeholder-gray-400"
        rows="5"
        placeholder="Write your note here..."
      ></textarea>
      <button
        :disabled="!canSave"
        @click="addNote"
        class="mt-2 px-4 py-2 rounded"
        :class="buttonState"
      >
        Save Note
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Note } from '@/types/note';
import { ref, defineEmits, computed } from 'vue';
  
  const noteContent = ref('');
  const emit = defineEmits(['saveNote']);
  
  const canSave = computed(() =>  noteContent.value.trim().length > 0);

  const buttonState = computed(() => { return canSave.value ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'  });
  
  const addNote = () => {
    if (noteContent.value.trim()) {

        const newNote = {
            id: Math.random(),
            title: 'New Note',
            content: noteContent.value,
            timestamp: Date.now().toLocaleString(),
            state: 'new',
            archived: false,
            deleted: false,
        } as Note;

        console.log('creating new note', newNote)
        
      emit('saveNote', newNote);
      noteContent.value = '';
    }
  };
  </script>
  
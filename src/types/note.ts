export interface Note {
    id: number;
    title: string;
    content: string;
    timestamp: string; // ISO 8601 format date string
    state: 'new' | 'active' | 'done';
    archived: boolean;
    deleted: boolean;
  }
  
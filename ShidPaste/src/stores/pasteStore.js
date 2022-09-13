import { writable } from 'svelte/store';

export const pasteLanguage = writable('markup');
export const pasteBody = writable('');

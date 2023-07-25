

import { writable } from 'svelte/store';
import { data, updateData } from '$lib/dataStore.js';
const ENDPOINT = 'http://hardware.gijsvanroij.nl/homeautomation';


// Create a new store with the given data.
export const connect = () => {
  // Create a new websocket
  const ws = new WebSocket(ENDPOINT);
  ws.addEventListener("message", (message: any) => {
    // Parse the incoming message here
    const data: Request = JSON.parse(message.data);
    // Update the state.  That's literally it.  This can happen from anywhere:
    // we're not in a component, and there's no nested context.
    updateData(data);
  });
};
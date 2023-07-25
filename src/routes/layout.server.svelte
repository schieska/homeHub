<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { updateData } from '$lib/dataStore.js';
	import WebSocket from 'ws';
	// Set the websocket endpoint URL
	const ENDPOINT = 'ws://hardware.gijsvanroij.nl/homeautomation';

		let socket = new WebSocket(ENDPOINT);
	  
	  function connectSocket() {
		// Create a new websocket
		// socket = new WebSocket(ENDPOINT);
		
		// Add event listener for incoming messages
		socket.addEventListener('message', (message) => {
		  // Parse the incoming message as JSON
		  const data = JSON.parse(message.data);
		  
		  // Update the data store with the incoming message
		  updateData(data);
		});
		
		// Add event listener for connection errors
		socket.addEventListener('error', () => {
		  console.log('Websocket connection error');
		});
		
		// Add event listener for connection close
		socket.addEventListener('close', () => {
		  console.log('Websocket connection closed, retrying in 5 seconds');
		  
		  // Attempt to reconnect after 5 seconds
		  setTimeout(() => {
			connectSocket();
		  }, 5000);
		});
	  };
	  
	  // Call the connectSocket function on mount
	  onMount(() => {
		console.log("connecting");
		connectSocket();
		
	  });
	  
	  // Close the socket connection on destroy
	  onDestroy(() => {
		socket = null;
	  });
	
  </script>
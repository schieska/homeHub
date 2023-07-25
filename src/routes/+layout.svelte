<script>
	import "@fontsource/outfit";
	import 'iconify-icon';
	import LoadScreen from "$lib/base/loadScreen.svelte"
	// import  '@iconify/icons-tabler';
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
import { updateData } from '$lib/dataStore.js';

// Set the websocket endpoint URL
const ENDPOINT = 'ws://hardware.gijsvanroij.nl/homeautomation';

let socket;
let connected = false;

function connectSocket() {
  // Create a new websocket
  socket = new WebSocket(ENDPOINT);
  
  // Add event listener for incoming messages
  socket.addEventListener('message', (message) => {
    // Parse the incoming message as JSON
    const data = JSON.parse(message.data).payload;
    
    // Update the data store with the incoming message
    updateData(data);
  });
  
  // Add event listener for connection errors
  socket.addEventListener('error', () => {
    console.log('Websocket connection error');
  });
  socket.addEventListener('open', () => {
    console.log('Websocket connected');
	connected = true;
  });
  
  // Add event listener for connection close
  socket.addEventListener('close', () => {
	connected = false;
    console.log('Websocket connection closed, retrying in 0.5 seconds');
    
    // Attempt to reconnect after 0.5 seconds
    setTimeout(() => {
      connectSocket();
    }, 500);
  });
};

// Connect to the WebSocket when the component is mounted
onMount(() => {
  console.log("connecting");
  connectSocket();
});

// Disconnect from the WebSocket when the component is destroyed
onDestroy(() => {
  if (socket) {
    socket.close();
  }
});
</script>

{#if !connected}

<div class="loader" transition:fade={{ delay: 600 }} > <LoadScreen /></div>

{:else}

<div class="content" transition:fade={{ delay: 0 }}>
	<slot />
</div>

{/if}


<style>
	:root {
		font-family: outfit;
		font-weight:500;
		color: white;
		background-color: var(--darkest);
		user-select: none;
		--dark-l: rgba(6, 38, 36, 0.2);
		--dark: rgb(6, 38, 36);
		--darker: rgb(3, 16, 15);
		--darkest: rgb(1, 16, 16);
		--accent: #0daa9f;
		--accent-light: #8cfff7;
		--accent-dark: #0f6963;
		--okay: rgb(0, 255, 119);
		--fail: rgb(246, 35, 42);
		--warn: rgb(255, 153, 0);
		--borderRadius: 10px;
		--sidePadding: 40px;
		transition: 0.2s;
	}
	.loader{
		z-index:200;
	}
	.content{
		z-index:0;
	}

	/* 
@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Black.ttf") format("truetype");
  font-weight: Black, 900;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-ExtraBold.ttf") format("truetype");
  font-weight: ExtraBold, 800;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Bold.ttf") format("truetype");
  font-weight: Bold, 700;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-SemiBold.ttf") format("truetype");
  font-weight: SemiBold, 600;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Medium.ttf") format("truetype");
  font-weight: Medium, 500;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Regular.ttf") format("truetype");
  font-weight: Regular, 400;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Light.ttf") format("truetype");
  font-weight: Light, 300;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-ExtraLight.ttf") format("truetype");
  font-weight: ExtraLight, 200;

}

@font-face {
  font-family: "outfit";
  src: url("/fonts/outfit/Outfit-Thin.ttf") format("truetype");
  font-weight: Thin, 100;

} */

	
</style>

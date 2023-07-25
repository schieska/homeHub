<script>

import Clock from '$lib/mobile/tiles/clock.svelte';
import MediaPlayer from '$lib/mobile/tiles/mediaPlayer.svelte'
</script>


<div class=list>
    <div class="clock"><Clock/></div>
    <div class="content media"><MediaPlayer/></div>
</div>



<style>
    	:root {
		--sidePadding: 20px;
	}
    .list{
        display:flex;
        flex-direction: column;

        gap:12px;
        padding:var(--sidePadding);
        background-color: var(--darker);
    }
    .content{
        height:90px;
        padding:8px;
        background-color: var(--darker);
        border-radius: var(--borderRadius);
    }

    .clock{
        grid-column:span 3;
        grid-row:1;
    }
    .media{
        grid-column:span 2;
        grid-row:2;
    }

    /* .content:before{
        aspect-ratio: 1;
    } */

</style>





<script>
    import { data } from '$lib/dataStore.js';
    import Marquee from '$lib/base/marquee.svelte';
import Toggle from '$lib/base/ButtonToggle.svelte';
    let musicPlayer;
	const unsubscribe = data.subscribe((value) => {
		musicPlayer = value.music;
	});
</script>

<div class=container>
    <div class="image">
		<img alt="" src={musicPlayer.current.coverArt} />
	</div>
<div class=textContainer>

	<!-- <div class="player">{musicPlayer.snapcast.players.playerList[musicPlayer.snapcast.players.selectedPlayer]}</div> -->
	<div class="track">
		<div class="timeline" style="width:{musicPlayer.current.songPassedPrecentage}%"></div>
	</div>
	
	<div>
	<div class="title"><Marquee>{musicPlayer.current.song}</Marquee></div>
	{#if musicPlayer.artist != ''}
		<div class="artist"><Marquee>{musicPlayer.current.artist}</Marquee></div>
	{/if}
	</div>
    

</div>
<Toggle icon="player-pause" iconToggle="player-play"/>
<a class="go" href="/mobile/page/music"> </a>
</div>

<filter
	id="colorGradient"
	x="-10%"
	y="-10%"
	width="120%"
	height="120%"
	filterUnits="objectBoundingBox"
	primitiveUnits="userSpaceOnUse"
	color-interpolation-filters="sRGB"
>
	<feColorMatrix
		type="matrix"
		values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
		in="SourceGraphic"
		result="colormatrix"
	/>
	<feComponentTransfer in="colormatrix" result="componentTransfer">
		<feFuncR type="table" tableValues="0.01 0.09" />
		<feFuncG type="table" tableValues="0.06 0.45" />
		<feFuncB type="table" tableValues="0.03 0.47" />
		<feFuncA type="table" tableValues="0 1" />
	</feComponentTransfer>
	<feBlend mode="normal" in="componentTransfer" in2="SourceGraphic" result="blend" />
</filter>

<style>
	.container{
		/* width:calc(100% - 16px); */
		height:100%;
		justify-content: space-between;
		overflow:hidden;
		display:flex;
		align-items: center;
		gap:8px;
		padding:8px;
		border-radius: var(--borderRadius);
		position:relative;
	}
	.image{
		height:100%;
		
	}
	.image img{
		filter: url(#colorGradient);
		border-radius:calc(var(--borderRadius) - 6px);
		height:100%;
		aspect-ratio: 1;
	}
	.title{
		/* font-size:120%; */
		color:var(--accent);
		/* width:min-content; */
	}
	.textContainer{
		height:100%;
		max-width: 50%;
		display:flex;
		flex-direction:column;

		font-size:0.8em;
		text-transform: capitalize;
		color:var(--accent-dark);
		justify-content: space-between;
		flex-grow:5;

	}

	/* .container:active{
		background-color: black;
		padding:8px;
	} */
	.player{
		/* color:var(--darkest); */
		background-color: var(--darkest);
		width:fit-content;
		border-radius:1000vw;
		padding:0.1em 0.5em;
		transform:translateX(-0.5em);
		font-size:0.8em;
		font-weight:500;
	}

	.track{
		width:100%;
		background-color: var(--accent-dark);
		height:8px;
		border-radius:1000vw;
		overflow:hidden;
	}

	.timeline{
		height:100%;
		background-color: var(--accent);
		border-radius:1000vw;
	}
	.go{
		position:absolute;
		left:0;
		top:0;
		height:100%;
		width:75%;
		background-color:transparent;
	}
</style>
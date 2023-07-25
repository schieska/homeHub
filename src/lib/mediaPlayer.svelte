<!-- TODO:
toggle buttons;
volume knob; 
settings 
-->
<script>
	import { data } from '$lib/dataStore.js';
	import Settings from '$lib/base/settings.svelte';
	import ButtonM from '$lib/base/ButtonMoment.svelte';
	import ButtonT from '$lib/base/ButtonToggle.svelte';
	import TimeLine from '$lib/base/timeLine.svelte';
	import Dropdown from '$lib/base/Dropdown.svelte';
	import VolumeSlider from '$lib/base/volumeSilder.svelte';
	import Marquee from '$lib/base/marquee.svelte';
	import MusicSpeaker from '$lib/base/musicSpeaker.svelte';
	import { fade } from 'svelte/transition';
	import {decodeHtmlEntity } from '$lib/base/htmlEntity.js'

	let musicPlayer;
	let title;
	let artist;

	$:{
		title = decodeHtmlEntity(musicPlayer.current.song);
		artist = decodeHtmlEntity(musicPlayer.current.artist);
	}
	data.subscribe((value) => {
		musicPlayer = value.music;
		// console.log(musicPlayer.current.song);
	});


// 	let musicPlayer;

// const unsubscribe = data.subscribe((value) => {
// 	musicPlayer = value.music;
// 	// console.log(musicPlayer.current.song);
// });
	

	export var enableBackground = true;
	var toggle = false;
	function open() {
		console.log('toggle');
	}
</script>

<Settings title="Muziek" icon="music" bind:toggle>
	<!-- {#each musicPlayer.snapcast.speakers as speaker}
		<MusicSpeaker
			name={speaker.name}
			enabled={speaker.enabled}
			volume={speaker.volume}
			travel={speaker.travel}
			info={speaker.info}
			allowed={speaker.allowed}
		/>
	{/each} -->
</Settings>
{#if enableBackground}
{#key musicPlayer.current.artistArt}
	<div transition:fade class="artistBg">
		
		<img  alt="" src={musicPlayer.current.artistArt} />
		
	</div>
	{/key}
{/if}
<div class="module">
	<div class="topMenu">
		<!-- <Dropdown
			selected={musicPlayer.snapcast.players.selectedPlayer}
			dropdownContent={musicPlayer.snapcast.players.playerList}
		/> -->
		<ButtonM
			icon="settings"
			size="small"
			outline={false}
			dark={true}
			on:click={() => (toggle = true)}
		/>
	</div>

	<div class="image">
		{#key musicPlayer.current.coverArt}
		<img transition:fade  alt="" src={musicPlayer.current.coverArt} />
		{/key}
	</div>


	<div class="title"><Marquee>{title}</Marquee></div>
	{#if musicPlayer.artist != ''}
		<div class="artist"><Marquee>{artist}</Marquee></div>
	{/if}
	{#if musicPlayer.current.timeline}
		<TimeLine
			leftText={musicPlayer.current.songPassed}
			rightText={musicPlayer.current.songLength}
			position={musicPlayer.current.songPassedPrecentage}
		/>
	{/if}
	<div class="buttons">
		{#if musicPlayer.current.skipable} <ButtonM icon="player-track-prev" />{/if}
		<ButtonT icon="player-pause" iconToggle="player-play" />
		{#if musicPlayer.current.skipable} <ButtonM icon="player-track-next" />{/if}
		<VolumeSlider />
	</div>
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
	.module {
		padding: 0 var(--sidePadding);
		width: auto;
		z-index: 2;
		max-width: 100%;
	}
	.buttons {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	.image {
		margin-top: 20px;
		width: auto;
		aspect-ratio: 1/1;
		border-radius: var(--borderRadius);
		overflow: hidden;
	}
	.image img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.artistBg {
		z-index: 0;
		position: absolute;
		width: 100vw;
		bottom: -10px;
		left: 0;
		filter: url(#colorGradient);
	}
	.artistBg img {
		/* height:800px; */
		
		position: relative;
		width: 100%;
	}
	.artistBg:after {
		content: '';
		position: absolute;
		inset: 0;
		top: -1px;
		width: 100%;
		height: 100%;
		background: linear-gradient(var(--darker) 20%, rgba(0, 0, 0, 0) 200%);
	}

	.title {
		margin-top: 20px;
		font-size: 1.8em;
		text-transform: capitalize;
		color: var(--accent-light);
	}
	.artist {
		font-size: 1.2em;
		text-transform: capitalize;
		color: var(--accent);
	}
	.topMenu {
		display: flex;
		justify-content: space-between;
	}
</style>

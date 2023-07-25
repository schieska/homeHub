<script>
	import { onMount } from 'svelte';
	let time = new Date();
	$: min = time.getMinutes();
	$: hou = time.getHours();
	let dagen = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
	let maanden = [
		'januari',
		'februari',
		'maart',
		'april',
		'mei',
		'juni',
		'juli',
		'augustus',
		'september',
		'october',
		'november',
		'december'
	];
	$: hours = hou < 10 ? '0' + hou : hou;
	$: minutes = min < 10 ? '0' + min : min;
	$: dayName = dagen[time.getDay()];
	$: day = time.getDate();
	$: month = maanden[time.getMonth()];
	$: year = time.getFullYear();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		// return () => {
		// 	clearInterval(interval);
		// };
	});
</script>

<div class="clockElement">
	<div class="clock baseMargin">{hours}:{minutes}</div>
	<div class="date baseMargin">{dayName} {day} {month} {year}</div>
</div>

<style>
	.baseMargin {
		margin: 0 var(--sidePadding);
	}
	.clockElement {
		margin-top: 88px;
		width: 100%;
	}
	.clock {
		font-weight: 900;
		font-size: 5em;
	}

	.date {
		color: var(--accent);
		font-weight: 900;
		font-size: 1.1em;
		text-transform: capitalize;
	}
</style>

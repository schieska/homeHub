<!-- TODO
connect data
check if now 
extended view

-->
<script>
	import Settings from '$lib/base/settings.svelte';
	var toggle = false;

	var calendar = [
		{
			date: 'dinsdag 10 februari',
			dateName: 'vandaag',
			items: [
				{
					start: '10:00',
					end: '12:00',
					description: 'vuilnis buiten zetten'
				},
				{
					start: '15:00',
					end: '13:00',
					description: 'vuilnis buiten zetten'
				}
			]
		}
	];
</script>

<Settings title="Calender" icon="calendar-event" {toggle} />
<div class="calendar">
	{#each calendar as date}
		<div class="day">
			<div class="head">
				<div class="dateName">{date.dateName}</div>
				<div class="date">{date.date}</div>
			</div>
			<div class="items">
				{#each date.items as item}
					<div class="item now">
						<div class="time">
							<div class="start">{item.start}</div>
							<div class="end">{item.end}</div>
						</div>
						<div class="description">{item.description}</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.calendar {
		margin: 0 var(--sidePadding);
	}
	.day {
		font-size: 0.8em;
		color: var(--accent);
		width: auto;
		text-transform: capitalize;
	}

	.dateName {
		font-size: 1.4em;
		color: var(--accent-light);
		text-transform: capitalize;
	}

	.head {
		width: auto;
		display: flex;
		flex-direction: column;
	}
	.items {
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.item {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 24px;
	}
	.time {
		color: var(--dark);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 0.5em;
		min-height: 3em;
		outline: 2px solid var(--dark);
		color: var(--accent);
		border-radius: var(--borderRadius);
	}
	.start {
		color: var(--accent);
	}
	.end {
		color: var(--accent);
	}

	.description {
		font-size: 1.4em;
		text-transform: capitalize;
	}
	.now:before {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		background: var(--accent-light);
		margin-left: -30px;
		border-radius: 100%;
	}
</style>

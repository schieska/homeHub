<script>
</script>

<div class="TellTales">
	<div class="icon ok" />
	<div class="icon warn" />
	<div class="icon fail" />
</div>

<style>
	.TellTales {
		position: absolute;
		width: 100%;
		display: flex;
		top: 0px;
		left: 0;
		/* flex-direction: row-reverse; */
		padding: 25px var(--sidePadding);
		gap: 20px;
		box-sizing: border-box;
		justify-content: center;
	}
	.icon {
		width: 32px;
		height: 32px;
		background: var(--dark);
		border-radius: 1000vw;
	}
	.ok {
		background: var(--okay);
	}
	.warn {
		background: var(--warn);
	}
	.fail {
		background: var(--fail);
	}
</style>

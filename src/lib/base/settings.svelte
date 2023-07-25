<script>
	export var title = 'BaseTitle';
	export var toggle = false;
	export var icon = 'alert-octagon';
	var settings;
</script>

<div class="settings {toggle ? '' : 'settingsClosed'}">
	<div class="inner">
		<button class="exit" on:click={() => (toggle = !toggle)}>
			<iconify-icon icon="tabler:x" />
		</button>
		<div class="header">
			<div class="title">
				<iconify-icon icon="tabler:{icon}" />
				<h1>{title}</h1>
				<div />
			</div>
		</div>
		<div class="settingsInner">
			<slot />
		</div>
	</div>
</div>

<style>
	.settings {
		z-index: 10;
		background: var(--dark);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		transform: translateX(0%);
		/* display: none; */
		transition: 0.5s;
		transition-delay: 0.2s;
		transition-timing-function: cubic-bezier(0.745, 0.145, 0.565, 1);
	}
	.settingsClosed {
		transform: translateY(100%);
		opacity: 0;
	}
	.header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: auto;
	}
	.title {
		color: var(--accent-light);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	.title iconify-icon {
		font-size: 2em;
	}

	.exit iconify-icon {
		font-size: 2em;
	}
	.inner {
		padding: 50px 50px;
		position: relative;
		height: 100%;
		overflow: scroll;
	}
	.exit {
		all: unset;
		position: absolute;
		top: 20px;
		right: 20px;
		width: 84px;
		height: 84px;
		border-radius: 1000vw;
		text-align: center;
		transition: 0.2s;
	}
	.exit:active {
		background-color: var(--darker);
	}

	.settingsInner {
		margin-top: 20px;
		height: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>

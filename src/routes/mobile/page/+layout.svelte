<script>
    import Menu from "$lib/mobile/menu.svelte";
</script>
<div class=main>
    <Menu/>
    <slot/>


</div>


<style>
	:root {
		--sidePadding: 20px;
	}
    .main{
        background: var(--darkest);
        display:flex;
        flex-direction: column;
        height: 100dvh;
        justify-content: space-around;
        /* padding:24px 0 0 0; */
        overflow:hidden;
    }
</style>

<!-- <script>
    import { onMount } from 'svelte';
let selected = 2;
let menuItems = [
    {title: "MediaPlayer",
    icon: "music",
    link:''},  
    {title: "Boodschap",
    icon: "notes",
    link:''},
    {title: "Verlichting",
    icon: "bulb",
    link:''},
    {title: "thermostaat",
    icon: "temperature",
    link:''},
    {title: "sensors",
    icon: "eye",
    link:''},
]
onMount(async () => {
setInterval(
    () => {
    selected++;
    if(selected >= menuItems.length){
        selected = 0;
    }
}, 1000);
});
$: MenuLength = menuItems.length;

</script>

<div class="container">
    {#each menuItems as item, index}
<button class="{index == selected ? "selected" : ""}">
    <iconify-icon icon="tabler:{item.icon}" />
</button>
{/each}
<div class=indicator style = "--selected: {selected}; --length: {MenuLength}">

</div>
</div>

<style>
	.container {
		width: 100vw;
        height:4em;
        padding:24px 0;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 var(--sidePadding);
        background: linear-gradient(0deg, rgba(0,0,0,0.5) 0, rgba(0,0,0,0) 100%);
        z-index: 1;
	}
    button{
        aspect-ratio: 1/1;
        width:4em;
        appearance: none;
        border: none;
        background:transparent;
        color:var(--accent-dark);
        font-size:2rem;
    }
    .selected{
        color:var(--accent-light);
    }
    .indicator{
        --buttonWidth : calc((( (100vw - (var(--sidePadding)* 2)) / (var(--length)+1))));
        position:absolute;
        left:0;
        bottom:4em;
        margin-left:calc(var(--sidePadding) + ((var(--buttonWidth)-4em)/2) - 2px );
        width:0.3em;
        transform:translateX(calc( (var(--buttonWidth)* var(--selected))));
        height:0.3em;
        z-index: 10;
        background: var(--accent-light);
        border-radius: 10px;
        transition-duration: 0.5s;
        transition-timing-function: cubic-bezier(0.395, 0.010, 0.555, 1.195);
    }
</style> -->

<script>
    import Button from "$lib/base/ButtonMoment.svelte"
</script>
<div>
    <Button size='small' icon="arrow-left"></Button>
</div>
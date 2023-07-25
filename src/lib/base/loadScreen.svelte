<script>
    export let loadingMessage = "Connecting to Websocket";
</script>

<div class="wrapper">
    <div class="container">
        <div class="text">{loadingMessage}</div>
        <div class="spinner"></div>
    </div>

</div>

<style>
    .wrapper{
        width:100%;
        height:100%;
        background-color:var(--darkest);
        position:absolute;
        top:0;
        left:0;
        z-index: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        font:900;
        color:var(--accent)
    }

</style>
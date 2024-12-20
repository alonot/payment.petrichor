<script>
    
    import Globe from '$lib/assets/svgs/globe.svg';
</script>
<div class="strip">
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>
    <div class="strip1">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div class="banner"><img src={Globe} style="filter: invert();width: 20px;" /></div>
        <div class="banner">&nbsp;PETRICHOR</div>
    </div>

</div>

<style>
    
    .strip {
		display: flex;
		flex: 2;
		align-items: center;
		overflow-x: hidden;
		width: 100vw;
		max-height: 35px;
        margin-bottom: 5vh;
		margin: 2rem 0;
		border-top: 2px solid white;
		border-bottom: 2px solid white;
		padding-top: 12px;
		padding-bottom: 12px;
		opacity: 60%;
	}
	.strip1 {
		display: flex;
		justify-content: center;
		min-width: max(20%, 150px);

		/* Apply animation to this element */
		-moz-animation: example1 5s linear infinite;
		-webkit-animation: example1 5s linear infinite;
		animation: example1 5s linear infinite;
	}

	.banner {
		display: inline-block;
	}

    /* Move it (define the animation) */
	@-moz-keyframes example1 {
		0% {
			-moz-transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%);
		}
	}
	@-webkit-keyframes example1 {
		0% {
			-webkit-transform: translateX(0%);
		}
		100% {
			-webkit-transform: translateX(-100%);
		}
	}
	@keyframes example1 {
		0% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
		}
		100% {
			-moz-transform: translateX(-100%); /* Firefox bug fix */
			-webkit-transform: translateX(-100%); /* Firefox bug fix */
			transform: translateX(-100%);
		}
	}

</style>
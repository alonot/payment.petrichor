<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	import { setContext } from 'svelte';
	import { PopUp } from '$lib/PopUp';
	import Loading from '$lib/components/Loading.svelte';
	import PopUpBox from '$lib/components/PopUpBox.svelte';
	let { children } = $props();

	let windowX:number
	let loading = $state(false);
	let PopUpObj = $state(new PopUp('', '', false, null));
	
	function updateLoading(val: boolean) {
		loading = val;
	}

	/**
	 * display a popUp Box
	 * @param title
	 * @param message
	 * @param timeOutTime
	 */
	const displayPopUp = (
		title: string,
		message: string,
		timeOutTime: number,
		callback: CallableFunction
	) => {
		// console.log("cal" + callback)
		// temporary condition until other modes are made
		PopUpObj.title = title;
		PopUpObj.message = message;
		PopUpObj.afterEnd = callback;
		PopUpObj.totalTime = timeOutTime;
		PopUpObj.isOn = true;
		return;
	};

	setContext('displayPopUp', displayPopUp);
	setContext('loading', updateLoading);

</script>


<Loading spinning={loading}/>

{#if PopUpObj.isOn}
	<PopUpBox bind:PopUpObj/>
{/if}


<Background path="/" />
<div
class="main"
in:fade={{duration: 400, delay: 400 }}
out:fly={{ x: windowX, duration: 400 }}
>

{@render children()}
</div>
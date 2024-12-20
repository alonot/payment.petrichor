<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { loggedIn,invalidate,user } from '$lib/stores';
	import { getContext, onMount } from 'svelte';
	import { workshops } from '$lib/data/workshop';
	import { enhance } from '$app/forms';
	import { frontend_url } from '$lib';

    export let data: any;
	let workshop: { name: any; };
	const loading: Function = getContext('loading');
	const displayPopUp: Function = getContext('displayPopUp');

    onMount(async () => {
		if (data.id == null){
			goto(`${frontend_url}/home`)
		}
		
		fetchInfo()
	});
	
	fetchInfo()
	function fetchInfo(){
		// @ts-ignore
		workshop = workshops[data.id]
		if (!workshop){
			goto(`${frontend_url}/home`)
		}	
	}

	function submit(onsubmit: { [x: string]: any; cancel: () => void }){
		loading(true)
		onsubmit.formData.set("eventId",data.id)
		// @ts-ignore
		return async ({ result }) => {
			loading(false);
			// console.log(result)
			if (result.type == 'success' && result.data) {
				const data = result.data;
				// console.log(data);
				if (data.success) {
					invalidate.set(true)
					displayPopUp('Success', `You have been registered to ${workshop.name}. You will receive an email regarding this soon.`,
						10000,() => {
							goto('/profile')
						}
					)
				} else {
					displayPopUp('Alert', data.message, 2000, () => goto('/workshop'));
				}
			} else {
				setTimeout(() => {
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : 'Something went wrong',
						2000,
						() => goto('/workshop')
					);
				}, 100);
			}
		}
	}


</script>

<main>

	<div id="all">
		<h1 style="text-align:center;margin-top:10rem;">
		Registering for <span style="color: blueviolet;">{workshop.name}</span>
	</h1>
	<div class="confirmBox">
		<p>Hi There! You can register to this event : {workshop.name} for free. Please click register to confirm.</p>
		<form action="?/pay" method="post" use:enhance={submit}>
			<button
			id="submit"
			type="submit"
			style="cursor:pointer; display:block; margin-top:5px;">Register Now</button
			>
		</form>
	</div>
</div>
</main>

<style>
	main{
		min-height: 90vh;
		z-index: 2;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.confirmBox{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	* {
		box-sizing: border-box;
	}

	button {
		width: 10rem;
		height: 2.5rem;
		font-size: large;
		border-radius: 2.5em;
		background-color: rgb(0, 183, 255);
		border: none;
		display: block;
		margin: 0 auto;
	}

	@media screen and (max-width: 900px) {

		h1 {
			width: 100vw;
		}
	
	}
	@media (max-width:600px){
		#all{
			margin-top: -6em;
		}
	}
</style>

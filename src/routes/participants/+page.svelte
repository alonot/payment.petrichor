<script lang="ts">

    import { enhance } from '$app/forms';   
    import { goto } from '$app/navigation';
	import Strip from '$lib/components/Strip.svelte';
    import { getContext, onMount } from 'svelte';
	const loading: Function = getContext('loading');
	const displayPopUp: Function = getContext('displayPopUp');
    export let data: any;
    export let form;
    
    let price = 1000;
    let amount;
    let emailCount = 1;
    $: amount = price*emailCount

	onMount(() => {
		if (data.user.endsWith('iitpkd.ac.in')) {	
			goto(`/free?id=${data.id}`);
		} else {
			goto(`/pay?id=${data.id}`);
		} 
	})

    function addEmailField() {
        emailCount++;
        const emailFieldsContainer = document.getElementById('emailFields');
        if (emailFieldsContainer) {
            const newEmailField = document.createElement('div');
            newEmailField.classList.add('email-container');
            newEmailField.innerHTML = `
            <div class="email-field" style="margin-bottom: 10px; display: flex; flex-direction: column; width: 100%;">
                <label for="email${emailCount}" style="margin: 5px;">Email:</label>
                <input type="email" id="email${emailCount}" name="email[]" placeholder="username@gmail.com"
                    style="height: 50px; width: 100%; font-size: 100%; padding: 10px 20px; border-radius: 10px; background-color: #40413ebb; border: none; color: white;" />
            </div>`;
            emailFieldsContainer.appendChild(newEmailField);
        } else {
            console.error('Email fields container not found.');
        }
    }


    function validate(form_vals: FormData) {
		const email: string = (form_vals.get('email') as string | null) ?? '';
		let valid = false;
		if (email.length == 0) {
			warn_email = 'required';
		} else {
				valid = true;
		}
		return valid;
	}


    let warn_email = '';

    $: registerResult = (onsubmit: { [x: string]: any; cancel: () => void }) => {
		loading(true);
		if (!validate(onsubmit.formData)) {
			onsubmit.cancel();
			console.log('cancelled');
			loading(false);
		}

		// @ts-ignore
		return async ({ result }) => {
			loading(false);
			// console.log(result)
			if (result.type == 'success' && result.data) {
				const data = result.data;
				console.log(data);
				if (data.success) {
					goto('/home');
				} else {
					displayPopUp('Alert', data, 2000, () => {});
				}
			} else {
				setTimeout(() => {
					displayPopUp(
						'Alert',
						result.data.err ? result.data.err : 'Invalid Credentials',
						2000,
						() => goto('/workshopRegistration')
					);
				}, 100);
			}
		};
	};

	function resetWarns() {
		warn_email = '';
	}
</script>


<main>
    <div>
        <div class="blank" />
        <div class="workshop_Registration" >
            <form id="emailForm" action="?/workshopRegistration" method="POST" use:enhance={registerResult} on:change={resetWarns}>
            <div class="workshop_Title"><h1>AI Workshop</h1></div>
            <div class="amt_btn">
                <button type="button" class="amount_button" disabled> Amount: {amount} </button>   
            </div>
            <div class="team_class">
                <h2> Team:</h2>
                <div class="input_box">
                    <div class="emailFields" id="emailFields">
                        <div class="email-container" id="email-container">
                            <label for="emailLabel">Email:</label>
                            <input type="email" id="emailid" name="email[]" placeholder="username@gmail.com" required />
                            {#if warn_email}
                                <p><strong>{warn_email}</strong></p>
                            {/if}
                        </div>
                    </div>
                </div>
                <div class="add_btn">
                    <button type="button" on:click={addEmailField} class="add_button">ADD +</button>
                </div>
                <div class="submit_btn">
                    <button type="submit" class="submit_button">Submit</button>
                </div>
            </div>
            </form>

        </div>
		<Strip />	



</main>


<style>
    * {
		box-sizing: border-box !important;
	}
    main {
		z-index: 11;
		position: relative;
		min-height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
    
    .blank {
		height: 80px;
	}
    .workshop_Title{
        margin-top: 7vh;
    }

    .workshop_Registration {
		margin-left: 10vw;
		display: flex;
		width: 40vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

    form {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
    #email-container {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    }
/* 
    #emailid{

    } */
    #emailLabel {
        margin: 5px;
    }
    #emailid {
		height: 50px;
		width: 100%;
		font-size: 100%;
		padding: 10px 20px;
		border-radius: 10px;
		background-color: #40413ebb;
		border: none;
		color: white;
	}

    .amount_button{
        border : 3px dashed grey;
        width : 150px;
        background-color: transparent;
        border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		text-align: center;
        margin: 1em 0;
		font-weight: 100;
    }
    /* #email-container input[type="email"] {
        height: 40px;
        width: 100%;
        font-size: 1rem;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    } */

    /* .email-container input[type="email"]::placeholder {
        color: #888;
    } */
    
    /* label{

    } */


    .input_box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		transition: all 1s ease; 
	}
    select,
	
	::placeholder {
		color: rgb(106, 105, 105);
	}
	/* label {
		margin: 5px;
	} */
	.input_box p {
		width: 100%;
		color: red;
		margin: 0;
		text-align: end;
		padding-right: 5px;
	}

    /* button {
		font-size: 1rem;
		border-radius: 10rem;
		padding: 2% 7%;
		background-color: #232423;
		color: white;
		font-weight: bold;
		border: none;
	} */
	.button_holder {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 20px;
		margin: 20px 30px;
		width: 100%;
	}
	@media (max-width: 720px) {
		.form {
			width: 100vw;
			margin: 0 10vw;
		}
		.input_box {
			font-size: smaller;
		}
		input {
			height: 40px;
		}
    }
    .submit_button{
    color: white;
    width: calc(40%,78);
    font-weight: 700;
    padding: 0.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    background: linear-gradient(99.74deg, #06dbac, #bd00ff);
    border-radius: 15px;
    border: none;
    }

    button{
    width: 150px;
    background-color: transparent;
    border-radius: 2.5em;
		padding: 0.8em 1em;
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid gray 1px;
		color: white;
		text-align: center;
    margin: 1em 0;
		font-weight: 100;
    }


</style>
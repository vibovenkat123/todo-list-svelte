<script lang="ts">
	import Profile from './Profile.svelte';
	import { signInWithPopup, type User } from 'firebase/auth';
	import Todo from './Todo.svelte';
	import { auth, provider } from '../firebase';
	import { authState } from 'rxfire/auth';
	let user: any = authState(auth);
	const login = () => {
		signInWithPopup(auth, provider);
	};
</script>

<main>
	{#if $user}
		<Profile name={$user.displayName} url={$user.photoURL} />
		<button
			on:click={() => {
				auth.signOut();
			}}>Sign OUt</button
		>
		<hr>
		<Todo uid={$user.uid}/>
	{:else}
		<button on:click={login}>Sign In With Google</button>
	{/if}
</main>

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
	<div class="main-todos">
		{#if $user}
		<div class="profile">
			<Profile name={$user.displayName} url={$user.photoURL} />
			<button class="button"
				on:click={() => {
					auth.signOut();
				}}>Sign Out</button
			>
		</div>
		<hr>
		<Todo uid={$user.uid}/>
	{:else}
		<button on:click={login} class="button">Sign In With Google</button>
	{/if}
	</div>
	
</main>
<style scoped>
	.main-todos{
		background-color: lightgray;
		padding: 4em;
	}
	.profile{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

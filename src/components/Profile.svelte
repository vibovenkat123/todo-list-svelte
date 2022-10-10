<script lang="ts">
	export let name: string;
	export let url: string;
</script>

<div class="profile">
	<h2>{name}'s todo list</h2>
	<img src={url} referrerpolicy="no-referrer" alt="user profile" width="70" class="pfp"/>
</div>
<style scoped>
	.profile{
		display: flex;
		align-items: center;
	}
	.profile h2 {
		margin-right:1em;
		font-size:1.5em;
	}
	.pfp {
		border-radius: 50%;
	}
</style>

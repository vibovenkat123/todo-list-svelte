<script lang="ts">
	import Login from '../components/Login.svelte';
</script>

<main>
	<div class="outer-container">
		<div class="container">
			<div class="container">
				<div class="hero">
					<h1 class="title">Todo List</h1>
				</div>
				<Login/>
			</div>
		</div>
	</div>
</main>
<style>
	.container{
		display:flex;
		width:75%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.outer-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width:100%;
		height:100vh;
		margin:0;
	}
	.container > * {
		padding: 2em;
	}
</style>
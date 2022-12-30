<script lang="ts" setup>

</script>

<template>
	<Menu />
	<main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
		<Header />
		<div class="container-fluid py-4">
			<slot />
			<Footer />
		</div>
	</main>
</template>

<style scoped>

</style>

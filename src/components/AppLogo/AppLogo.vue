<template>
	<div class="app-logo" :class="large && `--large`">
		<v-icon class="app-logo__icon" color="primary">mdi-movie-roll</v-icon>
		<div class="app-logo__content">
			<p>My Movie</p>
			<p>Library</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			large: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './AppLogo.scss';
</style>
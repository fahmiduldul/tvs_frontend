<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="@/assets/logo.png" alt="" width="30" height="24">
				</a>

				<!-- navbar button for mobile -->
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<!-- everything inside here will be collapsed on mobile -->
				<div class="collapse navbar-collapse" id="navbarSupportedContent">

					<!-- each item or link is a li inside here -->
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						
						<router-link></router-link>
						<li class="nav-item">
							<a href="#" class="nav-link" :class="{active : true}">link one</a>
						</li>

						<li class="nav-item">
							<a href="#" class="nav-link">link two</a>
						</li>

					</ul>

				</div>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style>

</style>
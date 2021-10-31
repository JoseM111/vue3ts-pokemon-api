<!-- @HomePage -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<script setup lang="ts">
import { useHomeComposables } from "@/views/home/Home.composables"
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀

/*:----  ©MEMBER-PROPERTIES --*/
const {
	pokemonState,
	pokemons,
	urlIdLookup,
	text,
	filteredPokemons,
	fetchAllPokemon
} = useHomeComposables()

/* #™☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰ */
// has to be called for the fetch to run
fetchAllPokemon()
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
	<div class="w-full flex justify-center">
		<!--input-->
		<input
			class="searchInput"
			type="text"
			placeholder="Enter Pokemon Here"
			v-model="text"
		>
		<!---->
	</div>
	
	<div class="mt-10 p-4 flex flex-wrap justify-center">
		<!--input-->
		<div
			class="ml-4 text-2x text-blue-500"
			v-for="(pokemon, index) in filteredPokemons"
			:key="index"
		>
			<router-link :to="`/about/${urlIdLookup[pokemon.name]}`">
					{{ pokemon.name }}
			</router-link>
			
		</div>
		<!---->
	</div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">
@import "./Home.styles.scss";
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

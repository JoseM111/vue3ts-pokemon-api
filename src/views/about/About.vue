<!-- @About.vue -->
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 SCRIPT 💻🌀🌀
// 🌀🌀💻 ☰☰☰☰ imports ☰☰☰☰ 💻🌀🌀
<script setup lang="ts">
import { useAboutComposables } from "@/views/about/About.composables"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰
// 🌀🌀💻 ☰☰☰☰☰☰☰☰☰☰☰ setup ☰☰☰☰☰☰☰☰☰☰☰ 💻🌀🌀

/*:----  ©MEMBER-PROPERTIES --*/
const { pokemon, fetchPokemon } = useAboutComposables()

/* #™☰☰☰☰☰☰☰ FUNCTION ☰☰☰☰☰☰ */

// has to be called for the fetch to run
fetchPokemon()
/**/
</script>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 HTML 💻🌀🌀
<template>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
  <div class="about">
	  <!--pokemon name-->
    <div class="pokemonIf"
         v-if="pokemon"
    >
	   <h3 class="text-2xl text-green-900 uppercase">
		   {{ pokemon.name }}
	   </h3>
	    <!--images-->
	    <div class="flex justify-center">
		    <img class="w-48" :src="pokemon.sprites.front_shiny" alt="">
		    <img class="w-48" :src="pokemon.sprites.back_shiny" alt="">
	    </div>
	    <!--types text-->
	    <h3 class="text-yellow-400">Type</h3>
	    <!--for-loop-->
	    <div v-for="(item, index) in pokemon.types" :key="index">
		    <!--suppress JSUnresolvedVariable -->
		    <h3 class="text-blue-900">{{ item.type.name }}</h3>
	    </div>
	    <h3 class="text-yellow-400">Ability</h3>
    </div>
	  <!---->
  </div>
  <!-- 🎵🎵🔲🔲◾☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->
</template>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<style lang="scss">
@import './About.styles.scss';
</style>
<!-- ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰ -->

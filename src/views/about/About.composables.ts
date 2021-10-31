/** About.composables.ts */
import { PokemonHttpResponse, PokemonResultType } from "@/apis/Pokemon.api"
import { reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useAboutComposables = () => {
  // ™ ____________
  const route = useRoute()
  const pokemonState = reactive({
    pokemon: {} as Pick<PokemonResultType, 'sprites' | 'name' | 'types'>
  })
  
  const state = toRefs(pokemonState)
  const { pokemon } = state
  const apiURLBySlug = `https://pokeapi.co/api/v2/pokemon/${ route.params.slug }/`
  
  function fetchPokemon(): void {
    // ™ ____________
    fetch(apiURLBySlug)
    .then((res: PokemonHttpResponse) => res.json())
    .then((data: PokemonResultType) => {
      // ™ ____________
      // ™ should return the correct pokemon when selected
      console.log('single pokemon data:', data)
      pokemonState.pokemon = data
    })
  }
  
  return { pokemon, fetchPokemon }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

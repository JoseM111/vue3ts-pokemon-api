/** Home.composables.ts */
import { PokemonHttpResponse, PokemonResponse, PokemonResultType, PokemonStateType } from "@/apis/Pokemon.api"
import { computed, reactive, toRefs } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export const useHomeComposables = () => {
  // ™ ____________
  const apiURL = "https://pokeapi.co/api/v2/pokemon?offset=0"
  
  const pokemonState = reactive<PokemonStateType>({
    pokemons: Array<PokemonResultType>(),
    urlIdLookup: {} as Pick<PokemonResponse, 'results'>,
    text: '',
    filteredPokemons: computed(() => updatePokemon())
  })
  
  /**
   * toRefs is useful when returning a reactive object from a composition function
   * so that the consuming component can destructure/spread the returned object
   * without losing reactivity
   * */
  const state = toRefs(pokemonState)
  const { pokemons, urlIdLookup, text, filteredPokemons } = state
  
  function updatePokemon(): PokemonResultType[] {
    // ™ ____________/**/
    return !pokemonState.text
    ? []
    : pokemonState.pokemons.filter((pokemon: PokemonResultType) => (
    pokemon.name.includes(pokemonState.text)
    ))
  }
  
  function fetchAllPokemon(): void {
    // ™ ____________
    fetch(apiURL)
    .then((res: PokemonHttpResponse) => res.json())
    .then((data: PokemonResponse) => {
      // ™ ____________
      console.log('list of pokemon data:', data)
    
      pokemonState.pokemons = data.results
      pokemonState.urlIdLookup = data.results.reduce(
      (accumulator: {}, current: PokemonResultType, index: number) => {
        return { ...accumulator, [ current.name ]: index + 1 }
      }, {}// initialValue: {}
      )
    })
  }
  
  return { pokemonState, pokemons, urlIdLookup, text, filteredPokemons, fetchAllPokemon }
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

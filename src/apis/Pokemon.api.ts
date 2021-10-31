/** Pokemon.api.ts */
import { ComputedRef } from "vue"
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export interface PokemonResponse {
  count: number
  next: string
  previous?: undefined | null
  results: PokemonResultType[]
}

export type PokemonResultType = {
  name: string
  url: string
  sprites?: SpritesType
  types?: Type
}

export type SpritesType = {
  back_default?: string
  back_female?: null
  back_shiny: string
  back_shiny_female?: null
  front_default?: string
  front_female?: null
  front_shiny: string
  front_shiny_female?: null
  other?: OtherType
  versions?: VersionType
  animated?: SpritesType
}

export type Type = {
  slot?: number
  type?: SpeciesType
}

export type SpeciesType = {
  name?: string
  url?: string
}

export type OtherType = {
  dream_world?: DreamWorld
  home?: Home
  "official-artwork"?: OfficialArtwork
}

export type VersionType = {
  "generation-i"?: GenerationI
  "generation-ii"?: GenerationIi
  "generation-iii"?: GenerationIii
  "generation-iv"?: GenerationIv
  "generation-v"?: GenerationV
  "generation-vi"?: { [ key: string ]: Home }
  "generation-vii"?: GenerationVii
  "generation-viii"?: GenerationViii
}

export interface GenerationV {
  "black-white"?: SpritesType
}

export interface GenerationIv {
  "diamond-pearl"?: SpritesType
  "heartgold-soulsilver"?: SpritesType
  platinum?: SpritesType
}

export interface GenerationI {
  "red-blue"?: RedBlue
  yellow?: RedBlue
}

export interface RedBlue {
  back_default?: string
  back_gray?: string
  front_default?: string
  front_gray?: string
}

export interface GenerationIi {
  crystal?: Crystal
  gold?: Crystal
  silver?: Crystal
}

export interface Crystal {
  back_default?: string
  back_shiny?: string
  front_default?: string
  front_shiny?: string
}

export interface GenerationIii {
  emerald?: Emerald
  "firered-leafgreen"?: Crystal
  "ruby-sapphire"?: Crystal
}

export interface Emerald {
  front_default?: string
  front_shiny?: string
}

export interface Home {
  front_default?: string
  front_female?: null
  front_shiny?: string
  front_shiny_female?: null
}

export interface GenerationVii {
  icons?: DreamWorld
  "ultra-sun-ultra-moon"?: Home
}

export interface DreamWorld {
  front_default?: string
  front_female?: null
}

export interface GenerationViii {
  icons?: DreamWorld
}

export interface OfficialArtwork {
  front_default?: string
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type PokemonStateType = {
  pokemons: PokemonResultType[]
  urlIdLookup: Pick<PokemonResponse, 'results'> | {},
  text: string,
  filteredPokemons: ComputedRef<PokemonResultType[]>
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰

export type PokemonHttpResponse = Response & {
  parsedBody?: PokemonStateType
}
// ⚫️⚫️☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰☰


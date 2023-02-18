import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {
    

  let hero = heroes.find(hero => hero.id === id)
  return hero;
}
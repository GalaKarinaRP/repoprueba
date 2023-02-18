
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {

  const herores = useMemo(() => 
  getHeroesByPublisher( publisher )
  ,[ publisher ]) 


  return (
   <div className='row rows-cols-1 row-cols-md-3 g-3'>
    {
       herores.map( heroe => (
           <HeroCard key={heroe.id}
           {...heroe}           
           />
       )) 
    }
   </div>
  )
}

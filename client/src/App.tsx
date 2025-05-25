import { useEffect, useState } from "react"

function App() {
  const [actors, setActors] = useState<ActorType[]>([]);

  const [search, setSearch] = useState<string>('');

  const [pageNumber, setPageNumber] = useState(0);

  const pageSize = 15;

  useEffect(
    () => {
      fetch(`/api/actor/list?search=${search}&page_number=${pageNumber}&page_size=${pageSize}`).
      then(res => res.json()).
      then(setActors)
    }, [search, pageNumber]
  )
  
  return (
    <>
      <input value={search} onChange={e => {
        setSearch(e.target.value)
        setPageNumber(0);
      }}/>
      <br/>
      <button disabled={pageNumber < 1} onClick={() => setPageNumber(prev => prev - 1)}>
        Предыдущая страница
      </button>
      <button disabled={actors.length < pageSize}  onClick={() => setPageNumber(prev => prev + 1)}>
        Следующая страница
      </button>
      <ul>
        {
          actors.map(
            actor => <li key={actor.actor_id}>{actor.first_name} {actor.last_name}</li>
          )
        }
        
      </ul>
    </>
  )
}

type ActorType = {
  actor_id: string;
  first_name: string;
  last_name: string
}

export default App

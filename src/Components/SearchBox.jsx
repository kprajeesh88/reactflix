import { useState, useEffect } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [defferedQuery, setDefferedQuery] = useState("");
  const [data] = useFetch(`search/movie`, { query: defferedQuery });

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setDefferedQuery(query);
    }, 1000);
    return () =>{
      clearTimeout(timer);
    }
  },[query]);

  return (
    <div className="searchBox">
      <input
        className="searchField"
        type="search"
        placeholder="Search Movies"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="resultBox">
        <ul>
          {data?.results?.map((item) => {
            const release_year = new Date(item?.release_date).getFullYear();
            return (
              <li key={item.id} onClick={() => navigate(`movie/${item?.id}`)}>
                <img
                  src={`https://image.tmdb.org/t/p/w92/${item?.poster_path}`}
                  alt=""
                />
                <div>
                  <h4>{item?.title}</h4>
                  <p>{release_year}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

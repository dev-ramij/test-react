import CardComponent from "../../components/card.component";
import { useEffect, useState } from "react";

export default function MovieList() {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {

        fetch('http://localhost:4000/get-movie-list')
            .then((res) => res.json())
            .then((r) => setMovieList([...r]))
            .catch((e) => console.error("error: ", e))
    }, [])


    return (
        <div className='movie-list-container'>
            {movieList.map((item, i) =>
                <CardComponent
                    key={i}
                    name={item.Title}
                    release={item['Release Date']}
                    rating={item['IMDB Rating']}
                />)}
        </div>
    )
}
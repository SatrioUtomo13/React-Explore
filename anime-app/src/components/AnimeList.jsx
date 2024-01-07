import React from 'react'
import Anime from './Anime'

function AnimeList({animes, onSelectedAnime}) {
  return (
    <ul className="list list-anime">
        {animes?.map((anime) => (
            <Anime key={anime.mal_id} anime={anime} onSelectedAnime={onSelectedAnime}/>
        ))}
    </ul>
  )
}   

export default AnimeList

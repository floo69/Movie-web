import "../styles.css";
import React from "react";
import Card from "./Card";

export default function Watchlist({ movies, watchlist, togglelist }) {
  return (
    <div>
      <h1 className="title">Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <Card
              key={id}
              movie={movie}
              togglelist={togglelist}
              islisted={true}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

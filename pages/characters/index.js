import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
  // Async function to get the data from the API
  const res = await fetch('https://akabab.github.io/starwars-api/api/all.json');
  const data = await res.json();
  return {
    props: { initialCharacters: data },
  };
};

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}

export default function Characters({ initialCharacters }) {
  // Component to display the characters
  const [query, setQuery] = useState(''); // State to store the query
  const [characters, setCharacters] = useState(initialCharacters); // State to store the characters

  const handleSubmit = (e) => {
    // Function to handle the submit event
    e.preventDefault(); // Prevent the default behavior of the event
    setCharacters(); // Reset the characters
  };

  return (
    <div className="charactersContainer">
      <h1 className="charactersTitle">Characters</h1>
      <div className="charactersHeader">
        <div className="searchbox-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for a character..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="charactersSearchBox"
            />
          </form>
          <Image src="/search.png" alt="search" height={30} width={30} />
        </div>
        <h4>
          <Link href="/">
            <a className="linkToCharacters">Back to home</a>
          </Link>
        </h4>
      </div>
      <br />
      <div className="charactersCardContainer">
        {initialCharacters
          .filter(
            (
              character // Filter the characters based on the query
            ) => character.name.toLowerCase().includes(query.toLowerCase()) // If the character name includes the query
          )
          .map(
            (
              character // Map the characters to the component
            ) => (
              <div
                className="charactersCard"
                key={Math.floor(Math.random() * 1000000)}
              >
                <Image
                  src={character.image}
                  width={200}
                  height={300}
                  className="characterImage"
                />
                <h2 className="characterName">{character.name}</h2>
                {character.height && <h4>Height: {character.height} m.</h4>}
                {character.mass && <h4>Mass: {character.mass} kg.</h4>}
                {character.homeworld && (
                  <h4>Homeworld: {capitalize(character.homeworld)}</h4>
                )}
                <h4>Species: {capitalize(character.species)}</h4>
                {character.cybernetics && (
                  <h4>Prosthetics: {character.cybernetics}</h4>
                )}
                {character.model && <h4>Model: {character.model}</h4>}

                <a
                  className="linkToCharacters"
                  href={character.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="linkToCharacters">See Character Wiki</h4>
                </a>
              </div>
            )
          )}
      </div>
    </div>
  );
}

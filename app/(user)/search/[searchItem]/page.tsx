import React from 'react'
import Search from '../page'

type PageProps = {
  params: {
    searchTerm: string
  }
}

const search = async (searchTerm: string) => {
  const res = await fetch(`https://serapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)
  return await res.json();
}

async function SearchResults({ params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults
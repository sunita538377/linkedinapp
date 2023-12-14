import React ,{useState} from 'react'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"field":"${searchTerm}"}`,
        {
          headers: {
            "projectID": "f104bi07c490",
          }
        }
      );

      const data = await response.json();
      setSearchResults(data); // Assuming the API response is an array of job postings
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Call handleSearch here if you want to fetch results in real-time as the user types
    // handleSearch();
  };
  return (
    <div className="search">
    <h1>LinkedIn Job Search</h1>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className="search-results">
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            {/* Display job posting details here */}
            <p>Title: {result.title}</p>
            <p>Author: {result.author}</p>
            {/* Other job details */}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Search
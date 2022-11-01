import './App.css';
import { useQuery, gql, } from "@apollo/client";

function App() {

  const GET_DATA = gql`
  query GetData {
    countries{name}
    countries{code}
    countries{continent{name}}
  }
`;

  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error...</p>;
  else {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td><h2>Code</h2></td>
              <td><h2>Country</h2></td>
              <td><h2>Continent</h2></td>
            </tr>
            {data.countries.map((country, index) =>
              <tr key={index}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.continent.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

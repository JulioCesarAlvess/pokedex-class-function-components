import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import FilterContextProvider from "./contexts/FilterContext";

//functional component 2
const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <div className="App">
          <PokemonCard />
        </div>
      </FilterContextProvider>
    </QueryClientProvider>
  );
};

export default App;

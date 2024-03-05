import { createContext, useContext, useMemo, useState } from "react";

export const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("1");
  const values = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter]
  );

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export default FilterContextProvider;

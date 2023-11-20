import { useState, useEffect } from "react";
import { useAllCharacterStarWars } from '../../hooks/useAllCharacterStarWars'
// import { dataList } from "../../utils/data"

// High order component

export const withListQuery = (Component, endpoint) => {

    const WrappedComponent = () => {
      const [dataFilter, setDataFilter] = useState(null);
      const [inputValue, setInputValue] = useState("");
      const { data, isLoading } = useAllCharacterStarWars(endpoint);

      useEffect(() => {
        if(data?.results){
          setDataFilter(data.results)
        }
      }, [data])

      const handleFilter = (value) => {
        const regex = new RegExp(value, "i");
        const result = data.results.filter((data) => data.name.match(regex));
        setDataFilter(result)
      }

      const handleSearchData = (e) => {
        const { value } = e.target;
        setInputValue(value);
        handleFilter(value);
      }

      return (
          <>
              <p>Query del buscador: </p>
              <input type="text" onChange={(e) => handleSearchData(e)} value={inputValue}/>
              <Component data={dataFilter} isLoading={isLoading}/>
          </>
      )
    }

    return WrappedComponent;
}
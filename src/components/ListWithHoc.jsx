/* eslint-disable react/prop-types */
import { withListQuery } from "./Hoc/withListQuery";

const List = ({data, isLoading}) => {

    return (
      <>
        <h3>Lista</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {data?.length ? data.map((value, key) => (
              <li key={key}>{value.name}</li>
            )) : (
                <li>No hay datos</li>
            )}
          </ul>
        )}
      </>
    );
}

export const ListWithHoc = withListQuery(List, "/people");
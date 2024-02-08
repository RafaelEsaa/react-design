import { useState } from "react";
import { lazy, Suspense } from "react";
import { ListWithHoc } from "./components/ListWithHoc";
import { Messages } from "./components/RenderProp/Messages";
import { useAllCharacterStarWars } from "./hooks/useAllCharacterStarWars";
const Title = lazy(() => import("./components/Title"));

const App = () => {
  const [show, setShow] = useState(false);
  const { data, isLoading } = useAllCharacterStarWars("/people");

  return (
    <>
      <button onClick={() => setShow(true)}>show title</button>

      {/* Suspense component */}
      {show && (
        <Suspense fallback={<p>Cargando...</p>}>
          <Title data={data} />
        </Suspense>
      )}

      {/* Render prop (design patterns)*/}
      {/* <Messages
        render={({ mensaje }) => {
          return (
            <>
              <h3>Mensajes:</h3>
              <p>{mensaje}</p>
            </>
          );
        }}
      /> */}

      <br />
      {/* Renderizando high order component */}
      <ListWithHoc />
    </>
  );
};

export default App;

import { ListWithHoc } from "./components/ListWithHoc";
import {Messages} from "./components/RenderProp/Messages";


const App = () => {

  return (
    <>
      {/* Render prop */}
      <Messages render={({mensaje}) => {
        return (
          <>
            <h3>Mensajes:</h3>
            <p>{mensaje}</p>
          </>
        )
      }}/>
      <br/>
      {/* Renderizando high order component */}
      <ListWithHoc />
    </>
  );
}

export default App

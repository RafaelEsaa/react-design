/* eslint-disable react/prop-types */
export const Messages = ({ render }) => {
    return (
        <>
            <h3>Ultimos mensajes</h3>
            {render({mensaje: "hola"})}
        </>
    )
}
export default function Titulo(props){
    
    return props.pequeno ? (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    ) : (
        <>
            <p>{props.principal}</p>
            <p>{props.secundario}</p>
        </>
    )
}
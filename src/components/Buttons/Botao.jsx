// import 

    export default function Botao (props) {

        

        return (

            <button className = {props.classe} onClick = {props.click} > {props.conteudo} </button>
        );
    }
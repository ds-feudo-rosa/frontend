import Button from './event/Button'

export default function Evento() {
    function meuEvento() {
        console.log(`Ativando meu primeiro evento!`)
    }
    
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
        </div>
    );
};


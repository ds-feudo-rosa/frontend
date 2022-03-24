import { useState } from 'react';

export default function FormLogin() {
    function receberUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} logou com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassowrd] = useState()
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={receberUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="passowrd" 
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
                <div>
                    <button to='./'>Cadastrar</button>
                </div>
            </form>
                
        </div>
    );
};
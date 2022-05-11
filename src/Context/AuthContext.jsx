import { createContext, useEffect, useState } from 'react'
import apiRequest from '../Helpers/ApiHelper';
import { notify } from '../Components/Notify/Notify';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [empresa, setEmpresa] = useState(null)

    async function signIn(login, senha) {
        await apiRequest.post(`/autenticacao`, {
            login: login,
            senha: senha
        }).then((res) => {
            if (res.status === 200) {
                setLoggedIn(true)
                setEmpresa(res.data)
                localStorage.setItem('empresa', JSON.stringify(res.data))
            }
        }).catch((err) => {
            notify('Não foi possível logar com as credenciais fornecidas', 'error')
        })
    }

    async function logOut() {
        localStorage.removeItem('empresa')
        setLoggedIn(false)
        setEmpresa(null)
    }

    function loadAuthentication() {
        const dadosEmpresaLocal = JSON.parse(localStorage.getItem('empresa'))
        if (dadosEmpresaLocal !== null) {
            setEmpresa(dadosEmpresaLocal)
            setLoggedIn(true)
        }
    }

    useEffect(() => {
        loadAuthentication()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedIn, empresa, signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
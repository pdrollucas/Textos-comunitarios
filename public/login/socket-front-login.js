import { definirCookie } from "../utils/cookies.js"

const socket = io()

function emitirAutenticarUsuario(dados) {
    socket.emit('autenticar_usuario', dados)
}

socket.on('autenticacao_sucesso', (tokenJwt) => { 
    definirCookie('tokenJwt', tokenJwt)

    alert('Usuário autenticado com sucesso') 
    window.location.href = '/'
})

socket.on('autenticacao_erro', () => alert('Erro na autenticação. Tente novamente'))
socket.on('usuario_nao_encontrado', () => alert('Nome de usuário não encontrado'))

export { emitirAutenticarUsuario }
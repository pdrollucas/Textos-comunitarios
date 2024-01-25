const conexaoDocumentos = []

function encontrarConexao(nomeDocumento, nomeUsuario){
    return conexaoDocumentos.find((conexao) => {
        return (conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario)
    })
}

function adicionarConexao(conexao){
    conexaoDocumentos.push(conexao)
}

function obterUsuariosDocumento(nomeDocumento){
    return conexaoDocumentos
        .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
        .map((conexao) => conexao.nomeUsuario)
}

function removerConexao(nomeDocumento, nomeUsuario){
    const indice = conexaoDocumentos.findIndex((conexao) => {
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    })
    if(indice !== -1){
        conexaoDocumentos.splice(indice, 1)
    }
}

export {adicionarConexao, obterUsuariosDocumento, removerConexao, encontrarConexao}
import { useEffect, useState } from 'react'
import CampanhaCard from './CampanhaCard'
import api from '../services/api'

const CampanhaList = () => {
    const [campanhas, setCampanhas] = useState([])

    useEffect(() => {
        const buscarCampanhas = async () => {
            try {
            const response = await api.get('/campanhas')
            setCampanhas(response.data.reverse()) // para exibir as mais recentes primeiro
            }catch (err) {
                console.error('Erro ao buscar campanhas:', err)
            }
        }

        buscarCampanhas()
    }, [])
    return (
    <div>
        <h2>Campanhas ativas</h2>
        {campanhas.length === 0 ? (
        <p>Nenhuma campanha encontrada.</p>
        ) : (
            campanhas.map((campanha) => (
                <CampanhaCard
                    key={campanha._id}
                    id={campanha._id}
                    titulo={campanha.titulo}
                    descricao={campanha.descricao}
                    chavePix={campanha.chavePix}
                />
            ))
        )}
    </div>
    )
}

export default CampanhaList

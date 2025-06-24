import { useState } from 'react'
import api from '../services/api'

const CampanhaCard = ({ id, titulo, descricao, chavePix,  }) => {
    const [copiado, setCopiado] = useState(false)

    const copiarChavePix = () => {
        navigator.clipboard.writeText(chavePix)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 2000)
    }

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
        }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{titulo}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{descricao}</p>
            <p style={{ marginBottom: '0.5rem' }}><strong> Chave Pix:</strong> {chavePix}</p>
            <button
                onClick={copiarChavePix}
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.4rem 0.8rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}
            >
                {copiado ? 'Chave copiada!' : 'Copiar chave Pix'}
            </button> 
        </div> 
    )
}

export default CampanhaCard

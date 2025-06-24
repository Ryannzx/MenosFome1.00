import { useState } from 'react'
import api from '../services/api' // importa a API

const CampanhaForm = ({ aoCriar }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descricao: '',
        chavePix: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await api.post('/campanhas', formData)
            if (aoCriar) aoCriar(res.data) // opcional, para atualizar lista no App
            setFormData({ titulo: '', descricao: '', chavePix: '' })
        } catch (error) {
            console.error('Erro ao criar campanha:', error)
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Criar nova campanha</h2>
            <input
                name="titulo"
                placeholder="Título"
                value={formData.titulo}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
            />
            <textarea
                name="descricao"
                placeholder="Descrição"
                value={formData.descricao}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
            />
            <input
                name="chavePix"
                placeholder="Chave Pix"
                value={formData.chavePix}
                onChange={handleChange}
                required
                style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
            />
            <button
                type="submit"
                style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Criar campanha
            </button>
        </form>
    )
}

export default CampanhaForm

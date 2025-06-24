import { useEffect, useState } from 'react'
import Header from './components/Header'
import CampanhaForm from './components/CAmpanhaForm' //campanha com A minusculo dá erro
import CampanhaList from './components/CampanhaList'
import api from './services/api'

function App() {
  const [campanhas, setCampanhas] = useState([])

  useEffect(() => {
    const fetchCampanhas = async () => {
      try {
        const res = await api.get('/campanhas')
        const ordenadas = res.data.sort((a, b) => (a._id < b._id ? 1 : -1))
        setCampanhas(ordenadas)
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error)
      }
    }

    fetchCampanhas()
  }, [])

const handleNovaCampanha = (nova) => {
  setCampanhas((prevCampanhas) => [nova, ...prevCampanhas])
}

  return (
    <div>
      <Header />
      <main style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
        <CampanhaForm aoCriar={handleNovaCampanha} />
        <CampanhaList campanhas={campanhas}/>
        Criado por Ryan Brenno Rodrigues Nunes
      </main>
    </div>
  )
}

export default App

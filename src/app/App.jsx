import { useState } from 'react'
import Header from '@/shared/header/ui/Header'
import Table from '@/shared/table/ui/Table'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={'container'}>
      <Header />
      <Table />
    </div>
  )
}

export default App

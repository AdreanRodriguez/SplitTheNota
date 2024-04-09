import { useState } from "react"
import Card from "./components/Card"
import Header from "./components/Header"


function App() {

  const [totalPer, setTotalPer] = useState(0)

  return (
    <div>
      <Header totalPer={totalPer}/>
      <Card setTotalPer={setTotalPer} />
    </div>

  )
}

export default App

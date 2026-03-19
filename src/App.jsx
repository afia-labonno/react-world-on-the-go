
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(response => response.json())


function App() {

  return (
    <>
      <Suspense fallback={<p>Counstries Loading...</p>}>
          <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App

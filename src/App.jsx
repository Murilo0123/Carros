import Luxuosos from "./components/Luxuosos.jsx"
import Sedans from "./components/Sedans.jsx"
import Suvs from "./components/Suvs.jsx"

export default function App(){
  return(
    <main className="py-20 px-6 min-h-svh bg-offwhitebg antialiased lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans />
        <Suvs />
        <Luxuosos />
      </div>
    </main>
  )
}
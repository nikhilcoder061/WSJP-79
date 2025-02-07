import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"


function App() {

  return (
    <>
      <Header />
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default App

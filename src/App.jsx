import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import PostsContainer from "./components/PostsContainer"
import AuthModal from "./components/AuthModal"
import { useState } from "react"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Navbar modalOpener={setIsModalOpen} />
      <Hero />
      <PostsContainer />
      {isModalOpen && <AuthModal modalCloser={setIsModalOpen} />}
    </>
  )
}

export default App

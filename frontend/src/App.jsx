import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header/Header.jsx"
import Main from "./components/Main/Main.jsx"
import NotificationButton from "./components/NotificationButton/NotificationButton.jsx"

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
    </>

  )
}

export default App

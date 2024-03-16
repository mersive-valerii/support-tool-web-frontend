import Header from './components/Header'
import DownloadLicense from './pages/DownloadLicense';
import MainContainer from './components/MainContainer';
import PushLicense from './pages/PushLicense';




import './App.css'

function App() {

  return (
    <>
    <Header/>
      <MainContainer>
        <DownloadLicense/>
          <hr />   
        <PushLicense/>
      </MainContainer>

    </>
  )
}

export default App
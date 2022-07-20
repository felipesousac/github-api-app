import ResetCSS from './components/global/resetCss'
import Layout from './components/Layout'
import Profile from './components/Profile'
import Repositories from './components/Repositories'

function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  )
}

export default App

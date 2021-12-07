import dynamic from 'next/dynamic'

const RemoteApp1 = dynamic(
  () => import('app1/component1'),
  { ssr: false }
)

const App1 = () => (<RemoteApp1 />)

export default App1

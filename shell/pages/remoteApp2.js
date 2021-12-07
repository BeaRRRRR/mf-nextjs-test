import dynamic from 'next/dynamic'

const RemoteApp2 = dynamic(
  () => import("app2/component2"),
  { ssr: false }
)

const App2 = () => (<RemoteApp2 />)

export default App2

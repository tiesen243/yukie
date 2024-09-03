import { Header } from '@/components/header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default MainLayout

import { HomeProvider } from 'context/Home'

import { Home as HomeTemplate } from 'template/Home'

export function Home() {
  return (
    <HomeProvider>
      <HomeTemplate />
    </HomeProvider>
  )
}

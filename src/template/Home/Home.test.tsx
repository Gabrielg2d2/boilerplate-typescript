import { render, screen } from '@testing-library/react'

import { Home } from '.'
import { HomeProvider } from 'context/Home'

describe('<Home />', () => {
  it('should render the Home', () => {
    render(
      <HomeProvider>
        <Home />
      </HomeProvider>
    )

    screen.getByText('Home Page Template')
  })
})

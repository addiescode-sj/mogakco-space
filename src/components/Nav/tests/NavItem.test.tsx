import { RecoilRoot } from 'recoil'
import { render, screen } from '../../../../test/test.utils'
import NavItem from '../components/NavItem'

it('renders a initial value for skills and projects', () => {
  render(<NavItem />, { wrapper: RecoilRoot })

  const buttons = screen.getAllByRole('button')
  expect(buttons).toBeDefined()
})

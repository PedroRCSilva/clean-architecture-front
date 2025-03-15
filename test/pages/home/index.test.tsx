
import { RootProvider } from '@providers';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';


it('renders learn reawct link', () => {
  const screen = render(<RootProvider />);
  const linkElement = screen.getByText(/learn-react/g);
  expect(linkElement).toBeInTheDocument();
})
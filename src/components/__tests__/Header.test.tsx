import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders the AstroAI brand', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/AstroAI/i)).toBeInTheDocument();
  });
}); 
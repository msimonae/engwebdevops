import { render, screen } from '@testing-library/react';
import App from './App';

// Nome do teste atualizado
test('renders currency converter header', () => {
  render(<App />);
  // Procura pelo título "Conversor de Moedas" que existe no seu app
  const headingElement = screen.getByText(/Conversor de Moedas/i);
  expect(headingElement).toBeInTheDocument();
});

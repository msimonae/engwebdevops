import { render, screen } from '@testing-library/react';
import App from './App';

// Nome do teste atualizado
test('renders currency converter header', () => {
  render(<App />);

  // Procura pelo cabeçalho (role 'heading') de nível 1 (<h1>)
  // que contenha o texto "Conversor de Moedas".
  const headingElement = screen.getByRole('heading', { 
    name: /Conversor de Moedas/i, 
    level: 1 
  });

  expect(headingElement).toBeInTheDocument();
});

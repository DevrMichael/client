import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login'; // Juster importstien etter hvor du har lagret Login-komponenten din

describe('Login Component', () => {
  test('renders Login component correctly', () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByLabelText(/username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('allows entering username and password', () => {
    render(<Login onLogin={() => {}} />);

    fireEvent.change(screen.getByLabelText(/username:/i), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByLabelText(/password:/i), {
      target: { value: 'password' },
    });

    expect(screen.getByLabelText(/username:/i)).toHaveValue('user');
    expect(screen.getByLabelText(/password:/i)).toHaveValue('password');
  });

  // Eksempel på en test som simulerer innlogging og sjekker forventet oppførsel
  test('calls onLogin when the login button is clicked', async () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByLabelText(/username:/i), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByLabelText(/password:/i), {
      target: { value: 'password' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledWith(true, 'user'); // Anta at onLogin kalles med true og brukernavn, avhenger av implementasjon
    });
  });
});

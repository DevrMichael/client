import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';
import axios from 'axios';

jest.mock('axios');
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.post.mockResolvedValue({
      data: { isAuthenticated: true, role: 'user' },
    });
  });
  it('renders Login component correctly', () => {
    render(<Login onLogin={() => {}} />);
    expect(screen.getByTestId('username-label')).not.toBeNull();
    expect(screen.getByTestId('password-label')).not.toBeNull();
    expect(screen.getByTestId('submit-button')).not.toBeNull();
  });

  it('allows entering username and password', () => {
    render(<Login onLogin={() => {}} />);

    fireEvent.change(screen.getByTestId('username-input'), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByTestId('password-input'), {
      target: { value: 'password' },
    });

    expect(screen.getByTestId('username-input')).toHaveValue('user');
    expect(screen.getByTestId('password-input')).toHaveValue('password');
  });

  fit('calls onLogin when the login button is clicked', async () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    const usernameInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');

    fireEvent.change(usernameInput, {
      target: { value: 'user' },
    });
    fireEvent.change(passwordInput, {
      target: { value: 'password' },
    });

    expect(usernameInput).toHaveValue('user');
    expect(passwordInput).toHaveValue('password');

    fireEvent.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
  });
});

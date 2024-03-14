import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HRView from './HRView';
import axios from 'axios';

jest.mock('axios');
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('HRView Component', () => {
  const mockOnLogout = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    axios.get.mockResolvedValue({
      data: [
        { suggestion: 'More coffee in the break room.' },
        { suggestion: 'Introduce flexible working hours.' },
      ],
    });
  });

  it('renders suggestions correctly', async () => {
    render(<HRView onLogout={mockOnLogout} />);

    await waitFor(() => {
      expect(
        screen.getByText('More coffee in the break room.')
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText('Introduce flexible working hours.')
      ).toBeInTheDocument();
    });
  });

  it('calls onLogout and navigates to home on logout click', async () => {
    render(<HRView onLogout={mockOnLogout} />);
    fireEvent.click(screen.getByTestId('logout-button'));

    await waitFor(() => {
      expect(mockOnLogout).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(mockUseNavigate).toHaveBeenCalledWith('/');
    });
  });
});

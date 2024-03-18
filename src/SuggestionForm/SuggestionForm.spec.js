import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SuggestionForm from './SuggestionForm';
import axios from 'axios';

jest.mock('axios');
const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('SuggestionForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  it('allows submission of suggestions', async () => {
    axios.post.mockResolvedValue({});

    render(<SuggestionForm />);

    const suggestionInput = screen.getByPlaceholderText(
      'Skriv inn ditt forslag'
    );
    fireEvent.change(suggestionInput, {
      target: { value: 'New coffee machine' },
    });
    expect(suggestionInput).toHaveValue('New coffee machine');

    fireEvent.click(screen.getByRole('button', { name: /Send inn forslag/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:3001/api/suggestions',
        { suggestion: 'New coffee machine' }
      );
    });
    await waitFor(() => {
      expect(suggestionInput).toHaveValue('');
    });
  });
});

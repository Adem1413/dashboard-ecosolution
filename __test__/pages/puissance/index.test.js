import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import FormLayoutDemo from '../../../pages/puissance'
import fetchMock from 'jest-fetch-mock'; // Import jest-fetch-mock

beforeAll(() => {
  fetchMock.enableMocks(); // Enable mocking for fetch
});

describe('FormLayoutDemo Component', () => {
    beforeAll(() => {
      fetchMock.mockOnce(JSON.stringify({ _id: 1, puissanceAllemande: 100, puissanceChinoise: 200 }));
    });
  
    it('renders component with initial values', async () => {
      const { getByText, getByLabelText } = render(<FormLayoutDemo />);
  
      // Ensure that the component renders with the initial values
      expect(getByText('Puissances des panneaux')).toBeInTheDocument();
      expect(getByLabelText('Puissance Allemande').value).toBe('200');
      expect(getByLabelText('Puissance Chinoise').value).toBe('100');
    });
})

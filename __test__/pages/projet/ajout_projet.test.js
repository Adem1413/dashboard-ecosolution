import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import FormLayoutDemo from '../../../pages/projet/ajout_projet';

describe('FormLayoutDemo Component', () => {
    it('renders the component with initial values', () => {
      render(<FormLayoutDemo />);
      
      // Test that the component renders
      expect(screen.getByText('Ajouter Projet')).toBeInTheDocument();
      
      // Test initial input values (update these with your initial values)
      expect(screen.getByLabelText('Titre').value).toBe('');
      expect(screen.getByLabelText('Address').value).toBe('');
      expect(screen.getByLabelText('Description').value).toBe('');
      expect(screen.getByLabelText('Production anuelle').value).toBe('');
      
  
      
    });
})
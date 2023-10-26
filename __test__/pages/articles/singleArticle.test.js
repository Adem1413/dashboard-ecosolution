/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import EmptyPage from '../../../pages/articles/singleArticle'

const testData = {
  titre: 'Test Titre',
  description: 'Test Description',
  contenu: 'Test Contenu',
  images: ['image1.jpg', 'image2.jpg'],
};

describe('EmptyPage Component', () => {
  it('renders component with data', () => {
    // Render the component with test data
    render(<EmptyPage data={testData} />);

    // Use screen queries to assert that the component renders as expected
    expect(screen.getByText('Titre Article:')).toBeInTheDocument();
    expect(screen.getByText(testData.titre)).toBeInTheDocument();
    expect(screen.getByText('Description:')).toBeInTheDocument();
    expect(screen.getByText(testData.description)).toBeInTheDocument();
    expect(screen.getByText('Contenu:')).toBeInTheDocument();
    expect(screen.getByText(testData.contenu)).toBeInTheDocument();

  
  });

});
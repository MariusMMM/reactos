import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClasseMemeSvgViewer from './ClasseMemeSvgViewer';

describe('<ClasseMemeSvgViewer />', () => {
  test('it should mount', () => {
    render(<ClasseMemeSvgViewer />);
    
    const classeMemeSvgViewer = screen.getByTestId('ClasseMemeSvgViewer');

    expect(classeMemeSvgViewer).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tournament from './tournament';
import '@testing-library/jest-dom';

describe('Tournament Component', () => {
  it('renders the tournament structure', () => {
    render(<Tournament />);
    // Check for the title and logo presence
    expect(screen.getByText('April 2024')).toBeInTheDocument();
    expect(screen.getByText('March 2024')).toBeInTheDocument();
    expect(screen.getByText('Feb 2024')).toBeInTheDocument();

  });

  it('displays winner logos correctly', () => {
    render(<Tournament />);
    const winnerLogos = screen.getAllByAltText('Forest Rangers SC');
    expect(winnerLogos).toHaveLength(3);
  });
});

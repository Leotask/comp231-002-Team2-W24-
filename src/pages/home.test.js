import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Slideshow } from './home'; 

const mockSlidesData = [
  { id: 1, src: 'img1.jpeg', caption: 'Caption 1' },
  { id: 2, src: 'img2.jpeg', caption: 'Caption Two' },
  { id: 3, src: 'img3.jpeg', caption: 'Caption Three' },
];

describe('Slideshow Component', () => {
  test('renders Slideshow and shows the first slide as active', () => {
    render(<Slideshow slidesData={mockSlidesData} />);
    expect(screen.getByText('Caption 1')).toBeVisible();
    expect(screen.getByText('1 / 3')).toBeVisible();
  });

  test('navigates to the next slide when next button is clicked', () => {
    render(<Slideshow slidesData={mockSlidesData} />);
    fireEvent.click(screen.getByText('❯'));
    expect(screen.getByText('Caption Two')).toBeVisible();
    expect(screen.getByText('2 / 3')).toBeVisible();
  });

  test('navigates to the previous slide when prev button is clicked', () => {
    render(<Slideshow slidesData={mockSlidesData} />);
    fireEvent.click(screen.getByText('❯')); 
    fireEvent.click(screen.getByText('❮'));
    expect(screen.getByText('Caption 1')).toBeVisible();
    expect(screen.getByText('1 / 3')).toBeVisible();
  });

  test('cycles back to the first slide from the last when next button is clicked', () => {
    render(<Slideshow slidesData={mockSlidesData} />);
    fireEvent.click(screen.getByText('❯'));
    fireEvent.click(screen.getByText('❯'));
    expect(screen.getByText('Caption Three')).toBeVisible();
    fireEvent.click(screen.getByText('❯'));
    expect(screen.getByText('Caption 1')).toBeVisible();
  });

  test('cycles to the last slide from the first when prev button is clicked', () => {
    render(<Slideshow slidesData={mockSlidesData} />);
    fireEvent.click(screen.getByText('❮'));
    expect(screen.getByText('Caption Three')).toBeVisible();
    expect(screen.getByText('3 / 3')).toBeVisible();
  });
});

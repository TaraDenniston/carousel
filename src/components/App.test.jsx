import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
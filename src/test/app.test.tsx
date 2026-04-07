import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@sudobility/components';
import '../i18n';
import DemoPage from '../pages/DemoPage';

function renderWithProviders(initialRoute = '/actions') {
  return render(
    <ThemeProvider themeStorageKey="test-theme" fontSizeStorageKey="test-font">
      <MemoryRouter initialEntries={[initialRoute]}>
        <DemoPage />
      </MemoryRouter>
    </ThemeProvider>
  );
}

describe('GenUI Demo App', () => {
  it('renders the top bar', () => {
    renderWithProviders();
    expect(screen.getByText('GenUI Demo')).toBeTruthy();
  });

  it('renders category list', () => {
    renderWithProviders();
    expect(screen.getAllByText('Actions & Buttons').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Text Inputs').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Controls').length).toBeGreaterThan(0);
  });
});

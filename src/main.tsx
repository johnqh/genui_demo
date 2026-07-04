import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureTheme } from '@sudobility/design';
import { defaultTheme, generateThemeCSS } from '@sudobility/design/themes';
import './index.css';
import './i18n';
import App from './App';

// Activate the design-system theme so `@sudobility/components` render theme-aware
// semantic classes (bg-primary, ...) that resolve via the :root/.dark CSS
// variables in index.css + createTailwindPreset() in tailwind.config.js —
// matching the RN apps and making all design styles + light/dark work.
configureTheme(defaultTheme);
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.id = 'sudobility-design-theme';
  styleEl.textContent = generateThemeCSS(defaultTheme);
  document.head.appendChild(styleEl);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

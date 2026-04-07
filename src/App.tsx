import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@sudobility/components';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <ThemeProvider themeStorageKey="genui-demo-theme" fontSizeStorageKey="genui-demo-font-size">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/actions" replace />} />
          <Route path="/:category" element={<DemoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './input.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { MantineTheme } from './styles/MantineTheme'
import { AuthProvider } from './hooks/useAuth'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        loader: 'bars',
        respectReducedMotion: true,
        cursorType: 'pointer',
        defaultRadius: 'xs',
        colors: {
          sky: [
            '#e0f2fe',
            '#bae6fd',
            '#7dd3fc',
            '#38bdf8',
            '#0ea5e9',
            '#0284c7',
            '#0369a1',
            '#075985',
            '#0c4a6e',
            '#082f49',
          ],
          red: [
            '#fee2e2',
            '#fecaca',
            '#fca5a5',
            '#f87171',
            '#ef4444',
            '#dc2626',
            '#b91c1c',
            '#991b1b',
            '#7f1d1d',
            '#450a0a',
          ],
          zinc: [
            '#f1f5f9',
            '#e2e8f0',
            '#cbd5e1',
            '#94a3b8',
            '#64748b',
            '#475569',
            '#334155',
            '#1e293b',
            '#0f172a',
            '#09090b',
          ],
        },
      }}
    >
      <Notifications />
      <App />
    </MantineProvider>
  </React.StrictMode>
)

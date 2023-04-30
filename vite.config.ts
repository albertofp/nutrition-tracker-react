import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/nutrition-tracker-react',
	plugins: [react()],
	test:{
		globals:true,
		environment:'jsdom',
		setupFiles:['./src/setupTests.ts']
	}
})

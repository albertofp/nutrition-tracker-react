import Toast from './Toast'
import { useToastStateContext } from './ToastContext'
import { ToastType } from '../../../types'

export default function ToastContainer() {
	const { toasts } = useToastStateContext()

	return (
		<div className='absolute bottom-4 right-4 w-60 min-w-fit z-50'>
			<div className='max-w-xl mx-auto'>
				{toasts &&
					toasts.map((toast: ToastType) => (
						<Toast
							id={toast.id}
							key={toast.id}
							type={toast.type}
							message={toast.message}
						/>
					))}
			</div>
		</div>
	)
}

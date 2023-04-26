import React, { createContext, useReducer, useContext } from 'react'
import { ToastType } from '../../../types'
import { ReactJSXElement, ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace'

const ToastStateContext = createContext<any>({ toasts: [] })
const ToastDispatchContext = createContext<null | React.Dispatch<any>>(null)

function ToastReducer(state: { toasts: ToastType[] }, action: { type: string; toast: any; id: number }) {
	switch (action.type) {
		case 'ADD_TOAST': {
			return {
				...state,
				toasts: [...state.toasts, action.toast]
			}
		}
		case 'DELETE_TOAST': {
			const updatedToasts = state.toasts.filter((e:any) => e.id != action.id)
			return {
				...state,
				toasts: updatedToasts
			}
		}
		default: {
			throw new Error('unhandled action')
		}
	}
}

export function ToastProvider({ children } : any) {
	const [state, dispatch] = useReducer(ToastReducer, {
		toasts: []
	})

	return (
		<ToastStateContext.Provider value={state}>
			<ToastDispatchContext.Provider value={dispatch}>
				{children}
			</ToastDispatchContext.Provider>
		</ToastStateContext.Provider>
	)
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)

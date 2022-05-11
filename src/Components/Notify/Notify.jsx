import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export function notify(message, tipo) {
    switch (tipo) {
        case 'error':
            toast.error(message, {
                theme: 'light',
                autoClose: 5000,
                position: toast.POSITION.TOP_RIGHT
            })
            break
        case 'success':
            toast.success(message, {
                theme: 'light',
                autoClose: 5000,
                position: toast.POSITION.TOP_RIGHT

            })
            break
        case 'alert':
            toast.warn(message, {
                theme: 'light',
                autoClose: 5000,
                position: toast.POSITION.BOTTOM_CENTER
            })
            break
        default:
            toast.info(message, {
                theme: 'light',
                autoClose: 2000
            })
    }
}
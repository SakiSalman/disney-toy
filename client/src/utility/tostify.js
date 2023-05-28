import { toast } from "react-toastify"

export const tostify = (type="error", message ) => {
   switch (type) {
      case 'suss':
         return toast.success(message)
      case 'warn':
         return toast.warn(message)
      case 'info':
         return toast.info(message)
      case 'error':
         return toast.error(message)
      default:
         break
   }
}


import swal from 'sweetalert';


export const swalAert = (message, reaction = "Oops!", err="error"  ) => {
  return  swal(reaction, message, err);
}
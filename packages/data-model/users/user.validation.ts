import * as yup from 'yup';
import { User } from './user';

export type UserUpdateData = Omit<User, 'id'>;
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const userUpdateValidation = yup.object().shape<Record<keyof UserUpdateData, yup.AnySchema>>({
  name: yup.string().required().trim(),
  email: yup.string().email().required().trim(),
  phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  address: yup.string(),
})
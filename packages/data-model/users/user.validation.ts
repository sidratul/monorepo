import * as yup from 'yup';
import { User } from './user';

export type UserUpdateData = Omit<User, 'id'>;
const phoneRegExp = /^[0|+\d{2}]\d{6,15}$/

export const userUpdateValidation = yup.object().shape<Record<keyof UserUpdateData, yup.AnySchema>>({
  name: yup.string().required().trim(),
  email: yup.string().email().required().trim(),
  phoneNumber: yup.string().trim().matches(phoneRegExp, {
    message: 'Phone number is not valid',
    excludeEmptyString: true,
  }),
  address: yup.string(),
})
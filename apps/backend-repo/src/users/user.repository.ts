import * as firebase from "../firebase/firebase.config";
import type { User, UserList } from "./user.types";
import { UserUpdateData } from "./user.validation";

const USER_COLLECTION = 'users';

const getUserCollection = () =>  {
  const db = firebase.db;
  return db.collection(USER_COLLECTION);
}

export const findAll = async (): Promise<UserList> => {
  const snapshot = await getUserCollection().get();
  const users: User[] = [];
  snapshot.forEach((userDoc) => {
    users.push(userDoc.data() as  User);
  });

  return {
    total: users.length,
    data: users,
  };
}

export const findById = async (id: string): Promise<User | undefined> => {
  const userDoc = await getUserCollection().doc(id).get();
  return userDoc.data() as User;
}

export const createUser = async (user: User): Promise<User> => {
  await getUserCollection().doc(user.id).create(user);
  return user;
}

export const updateUser = async (id: string, userData: Omit<UserUpdateData, 'id'>) => {
  const userRef = getUserCollection().doc(id);
  await userRef.update({
    id,
    ...userData
  });
  const userDoc = await userRef.get();
  return userDoc.data();
}
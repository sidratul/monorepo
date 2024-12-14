import { Metadata } from 'next';
import { UserContent } from './UserContent';

export const metadata: Metadata = {
  title: "Profile",
  description: "profile page",
};

export default function Home() {
  return (
    <UserContent/>
  );
}

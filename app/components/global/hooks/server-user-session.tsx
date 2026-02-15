import { authOptions } from '@/app/api/auth/[...nextauth]/authOption';
import { getServerSession } from 'next-auth'

export async function getSessionUser() {
  const session = await getServerSession(authOptions);
  return session;
}


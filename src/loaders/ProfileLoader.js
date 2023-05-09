import { get as getUser } from '../services/userService';

export async function profileLoader({ params }) {
  const userProfile = await getUser(params.userId);

  return { userProfile };
}

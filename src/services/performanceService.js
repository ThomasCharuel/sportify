import { getRequest } from './apiService';

export async function get(userId) {
  return getRequest(`/user/${userId}/performance`);
}

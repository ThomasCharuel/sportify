import { get as getUser } from '../services/userService';
import { get as getActivity } from '../services/activityService';
import { get as getAverageSessions } from '../services/averageSessionsService';
import { get as getPerformance } from '../services/performanceService';

export async function profileLoader({ params }) {
  const userProfile = await getUser(params.userId);
  const userActivity = await getActivity(params.userId);
  const userAverageSessions = await getAverageSessions(params.userId);
  const userPerformance = await getPerformance(params.userId);

  const performance = userPerformance.data.map((data) => ({
    value: data.value,
    kind: userPerformance.kind[data.kind],
  }));

  const profile = {
    firstName: userProfile.userInfos.firstName,
    keyData: userProfile.keyData,
    activities: userActivity.sessions,
    sessions: userAverageSessions.sessions,
    todayScore: userProfile.todayScore,
    performance,
  };

  console.log(profile);

  return { profile };
}

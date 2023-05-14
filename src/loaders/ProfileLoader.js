import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../_services/Api.Service';

const profileLoader = async ({ params }) => {
  try {
    // Get data
    const userProfile = await getUser(params.userId);
    const userActivity = await getUserActivity(params.userId);
    const userAverageSessions = await getUserAverageSessions(params.userId);
    const userPerformance = await getUserPerformance(params.userId);

    // Format data
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

    return { profile };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { profileLoader };

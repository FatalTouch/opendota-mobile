import React from 'react';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import PlayerSummary from './PlayerSummary';
import MatchList from './Matches';


const PlayerProfile = ({ navigation }) => (
  <ScrollableTabView
    renderTabBar={() => <ScrollableTabBar />}
  >
    <PlayerSummary tabLabel="Overview" accountId={navigation.state.params.accountId} />
    <MatchList tabLabel="Matches" accountId={navigation.state.params.accountId} />
  </ScrollableTabView>
);

export default PlayerProfile;

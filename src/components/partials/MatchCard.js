import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import { heroes as heroList, game_mode as gameModeList } from 'dotaconstants/mobile';

import getHeroImage from '../../utils/getHeroImage';

const MatchCard = (props) => {
  const {
    kills,
    deaths,
    assists,
    player_slot,
    hero_id,
    duration,
    radiant_win,
    game_mode,
    start_time
  } = props.match;

  const {
    containerStyle,
    avatarStyle,
    textContainerStyle,
    heroNameStyle,
    subTextStyle,
    mainTextStyle,
    centerTextStyle
  } = styles;

  const matchMinutes = Math.floor(duration / 60);
  const matchSeconds = (duration % 60);
  const heroName = heroList[hero_id].localized_name;
  const matchDuration = `${matchMinutes}:${(matchSeconds < 10 ? `0${matchSeconds}` : matchSeconds)}`;
  const playerTeam = player_slot < 128 ? 'Radiant' : 'Dire';
  const result = ((playerTeam === 'Radiant' && radiant_win) || (playerTeam === 'Dire' && !radiant_win)
    ? 'Win' : 'Loss');
  const resultColor = result === 'Win' ? '#66bb6a' : '#ff4c4c';
  const gameMode = gameModeList[game_mode].localized_name;
  const endTime = moment.unix(start_time + duration).fromNow();

  return (
    <TouchableWithoutFeedback>
      <View style={[containerStyle, props.rowStyle]}>
        <Image style={avatarStyle} source={getHeroImage(hero_id)} />
        <View style={[textContainerStyle, { flex: 2 }]}>
          <Text style={heroNameStyle}>{heroName}</Text>
          <Text style={subTextStyle}>{`${playerTeam} - ${gameMode}`}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1.4 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{matchDuration}</Text>
          <Text style={[subTextStyle, centerTextStyle]}>{endTime}</Text>
        </View>
        <View style={[textContainerStyle, { flex: 1 }]}>
          <Text style={[mainTextStyle, centerTextStyle]}>{`${kills}/${deaths}/${assists}`}</Text>
          <Text style={[subTextStyle, centerTextStyle, { color: resultColor }]}>{result}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'hsla(0,0%,100%,.019)'
  },
  avatarStyle: {
    width: 52,
    height: 29,
    marginRight: 5,
    alignSelf: 'center'
  },
  textContainerStyle: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  heroNameStyle: {
    fontSize: 13,
    color: 'rgb(102,187,255)'
  },
  mainTextStyle: {
    fontSize: 12,
    color: 'rgb(245,245,245)'
  },
  subTextStyle: {
    fontSize: 12,
    color: '#b3b3b3',
  },
  centerTextStyle: {
    alignSelf: 'center'
  }
};

export default MatchCard;

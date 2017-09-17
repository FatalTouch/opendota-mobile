import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';

const PlayerCard = (props) => {
  const { personaname, avatarfull, account_id, last_match_time } = props.player;
  const { containerStyle, avatarStyle, textContainerStyle, lastPlayedText, accountIdText } = styles;
  return (
    <TouchableWithoutFeedback>
      <View style={containerStyle}>
        <Image style={avatarStyle} source={{ uri: avatarfull }} />
        <View style={textContainerStyle}>
          <Text>{personaname}</Text>
          <Text style={accountIdText}>{account_id}</Text>
          <Text style={lastPlayedText}>
            {`Last Played: ${last_match_time ? moment(last_match_time).fromNow() : 'Not available'}`}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    padding: 5,
    flexDirection: 'row'
  },
  avatarStyle: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  textContainerStyle: {
    flexDirection: 'column'
  },
  accountIdText: {
    fontSize: 12
  },
  lastPlayedText: {
    color: '#b3b3b3',
    fontSize: 12
  }
};

export default PlayerCard;

import React, { Component } from 'react';
import { ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMatchList from '../../actions/MatchAction';

import MatchCard from '../partials/MatchCard';

class RecentMatches extends Component {


  static renderRow(data) {
    const styles = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }]
    return <MatchCard match={data.item} rowStyle={styles[data.index % styles.length]} />;
  }

  componentDidMount() {
    this.props.actions.getMatchList(this.props.navigation.state.params.accountId);
  }

  isFetching() {
    if (this.props.isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  render() {
    return (
      <ScrollView style={styles.containerStyle}>
        <FlatList
          data={this.props.matchList}
          renderItem={RecentMatches.renderRow}
          initialNumToRender={15}
          keyExtractor={item => item.match_id}
        />
        {this.isFetching()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { matchList, isFetching, isMatchListEmpty } = state.matchList;
  return {
    matchList, isFetching, isMatchListEmpty
  };
};

const mapDispatchToProps = dispatch => (
  {
    actions: {
      getMatchList: bindActionCreators(getMatchList, dispatch)
    }
  }
);

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(46, 47, 64)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentMatches);

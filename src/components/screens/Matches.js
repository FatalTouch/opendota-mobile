import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMatchList, { clearMatchList } from '../../actions/MatchAction';

import MatchCard from '../partials/MatchCard';

class RecentMatches extends Component {
  static renderItem(data) {
    const styles = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }];
    return <MatchCard match={data.item} rowStyle={styles[data.index % styles.length]} />;
  }

  componentDidMount() {
    this.props.actions.clearMatchList();
    this.props.actions.getMatchList(this.props.navigation.state.params.accountId, 0);
  }

  isFetching() {
    if (this.props.isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  loadMatchList = () => {
    if (!this.props.isFetching) {
      this.props.actions.getMatchList(this.props.navigation.state.params.accountId, this.props.page);
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.matchList}
          renderItem={RecentMatches.renderItem}
          initialNumToRender={15}
          keyExtractor={item => item.match_id}
          onEndReached={() => this.loadMatchList()}
          onEndReachedThreshold={1}
        />
        {this.isFetching()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { matchList, isFetching, isMatchListEmpty, page } = state.matchList;
  return {
    matchList, isFetching, isMatchListEmpty, page
  };
};

const mapDispatchToProps = dispatch => (
  {
    actions: {
      getMatchList: bindActionCreators(getMatchList, dispatch),
      clearMatchList: bindActionCreators(clearMatchList, dispatch)
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

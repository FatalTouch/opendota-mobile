import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerCard from '../../partials/PlayerCard';

class SearchResults extends Component {

  static renderRow(data) {
    return <PlayerCard player={data.item} />;
  }

  renderSeparator = () => (
    <View
      style={{
        height: 1,
        flex: 1,
        backgroundColor: '#e7e8ec',
        marginLeft: 60
      }}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          removeClippedSubViews={false}
          data={this.props.searchResult}
          renderItem={SearchResults.renderRow}
          keyExtractor={item => item.account_id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state) => {
  const { searchResult } = state.search;
  return { searchResult };
};

export default connect(mapStateToProps)(SearchResults);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import PlayerCard from '../../partials/PlayerCard';

class SearchResults extends Component {

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

  _handlePress = (account_id) => {
    console.log('clicked');
    this.props.navigation.navigate('profile', { accountId: account_id });
  };

  _renderItem = ({ item }) => <PlayerCard player={item} onPress={() => this._handlePress(item.account_id)} />;


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.searchResult}
          renderItem={this._renderItem}
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

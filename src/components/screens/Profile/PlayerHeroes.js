import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getHeroList from '../../../actions/PlayerHeroAction';
import HeroCard from '../../partials/HeroCard';

class PlayerHeroes extends Component {

  static renderItem(data) {
    const bgColors = [{ backgroundColor: 'hsla(0,0%,100%,.019)' }, { backgroundColor: 'rgba(0,0,0,.019)' }];
    return <HeroCard hero={data.item} rowStyle={bgColors[data.index % bgColors.length]} />;
  }

  componentDidMount() {
    this.props.actions.getHeroList(this.props.accountId.toString());
  }

  isFetching() {
    if (this.props.isFetching) {
      return <ActivityIndicator size="large" />;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.heroList}
          renderItem={PlayerHeroes.renderItem}
          initialNumToRender={15}
          keyExtractor={item => item.hero_id}
        />
        {this.isFetching()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { heroList, isFetching, isHeroListEmpty } = state.playerHeroes;
  return {
    heroList, isFetching, isHeroListEmpty
  };
};


const mapDispatchToProps = dispatch => (
  {
    actions: {
      getHeroList: bindActionCreators(getHeroList, dispatch)
    }
  }
);

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgb(46, 47, 64)'
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHeroes);

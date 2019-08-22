import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import HeaderComp from '../commonComponents/header/header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  Content,
  List,
  Spinner,
  Icon,
  Header,
  Item,
  Input,
  Button,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {getWatchlistRequest} from '../../actions/watchList/getWatchListAction';
import WatchlistItem from './components/watchlistItem';

class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount = () => {
    console.log('didmount')
    const params = {
      session_id: this.props.createSessionId.session.session_id,
      page: this.state.page,
    };
    this.props.getWatchlistRequest(params);
  };

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={styles.headerBtnStyle}>
          <Icon
            ios="ios-menu"
            android="md-menu"
            style={styles.iconStyles}
          />
        </TouchableOpacity>
      ),
      headerTitle: <HeaderComp title={'My Watchlist'}  showSearch={false}/>,
      headerRight: <TouchableOpacity style={styles.headerBtnStyle} />,
    };
  };

  renderRow = (data) => {
    return (
      <WatchlistItem data={data} />
    )
  }
 
  render = () => {
    return (
      <Container>
        <Content contentContainerStyle={styles.containerStyle}>
          {this.props.watchlist.isFetching && (
            <View style={{flex: 1}}>
              <Spinner color={'blue'} />
            </View>
          )}
          {!this.props.watchlist.isFetching &&
            this.props.watchlist.watchlist.results.length && (
              <List
                dataArray={this.props.watchlist.watchlist.results}
                renderRow={this.renderRow}
                keyExtractor={item => item.id.toString()}
                style={{marginBottom: 10}}
              />
            )}
        </Content>
      </Container>
    );
  };
}

const styles = StyleSheet.create({
  iconStyles: {
    fontSize: 25,
    color: '#0091EA',
    paddingLeft: 15,
  },
  input: {fontSize: hp('1.8%'), flex: 2},
  leftHeaderIconStyle: {
    fontSize: hp('1.8%'),
    color: '#0091EA',
    fontWeight: '500',
    marginLeft: 5,
  },
  headerBtnStyle: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle: {
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerStyle: {backgroundColor: '#ffffff', flex: 1},
});

function mapStateToProps(state) {
  console.log(state)
  return {
    watchlist: state.watchlist,
    createSessionId: state.createSessionId,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getWatchlistRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WatchList);

import React from 'react';
import {
  View,
  FlatList,
  InteractionManager,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import lodash from 'lodash';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import {elevationShadowStyle} from '@helpers';
import {Pagination} from 'react-native-snap-carousel';
export class Carousel extends React.Component<any, any> {
  private viewabilityConfig: any;
  private flatList: any;
  private _autoplay: any;
  constructor(props: any) {
    super(props);
    const data = [...props.data];
    const originLength = data.length;
    if (props.loop) {
      data.splice(0, 0, data[data.length - 1]);
      data.splice(data.length, 0, data[1]);
    }
    this.state = {
      pageIndex: 0,
      data: lodash.compact(data), //
      index: 0,
      side: 0,
      originLength,
      _updateAutoMode: false,
      layout: null,
    };
    this.viewabilityConfig = {
      waitForInteraction: true,
      itemVisiblePercentThreshold: 80,
    };
  }

  onTouchStart = () => {
    if (this._autoplay) {
      clearInterval(this._autoplay);
      this._autoplay = null;
    }
    this.setState({gestureMode: true});
  };
  onTouchEnd = () => {
    this.runAutoPlay();
  };

  onViewableItemsChanged = ({viewableItems, changed}: any) => {
    const {index} = this.state;
    const items = changed.filter((it: any) => it.isViewable);
    if (items.length == 0) {
      return;
    }
    let item = lodash.get(items, '[0].index', index);
    if (index == item) {
      return;
    }
    if (index > item) {
      this.setState({index: item});
    } else {
      const indexItem =
        this.props.numberItems > 0
          ? Math.max(item - this.props.numberItems + 1, 0)
          : Math.max(item - this.props.numberItems, 0);
      this.setState({
        index: indexItem,
      });
    }
  };

  runAutoPlay() {
    if (this.props.autoplay) {
      if (this._autoplay) {
        return;
      }
      InteractionManager.runAfterInteractions(() => {
        this._autoplay = setInterval(() => {
          const {pageIndex, originLength, _updateAutoMode} = this.state;
          let index = pageIndex + 1;
          if (this.props.loop) {
            if (index < 1) {
              index = originLength;
            } else if (index > originLength) {
              index = 1;
            }
          } else {
            index = Math.min(index, originLength - 1);
          }
          this.setState({
            pageIndex: index,
            _updateAutoMode: !_updateAutoMode,
            gestureMode: false,
          });
        }, this.props.autoplayInterval);
      });
    }
  }

  componentDidMount() {
    this.runAutoPlay();
  }

  componentWillUnmount() {
    if (this._autoplay) {
      clearInterval(this._autoplay);
      this._autoplay = null;
    }
  }

  static getDerivedStateFromProps(props: any, state: any) {
    if (state.data != props.data) {
      const data = [...props.data];
      // if (props.loop) {
      //   data.splice(0, 0, data[data.length - 1]);
      //   data.splice(data.length, 0, data[1]);
      // }
      return {
        data: lodash.compact(data),
      };
    }
    return null;
  }

  componentDidUpdate(_props: any, state: any) {
    if (state._updateAutoMode != this.state._updateAutoMode) {
      this.flatList?.scrollToIndex({
        animated: true,
        index: this.state.pageIndex,
      });
    }
  }

  retryScroll = (info: any) => {
    const wait = new Promise((resolve) => setTimeout(resolve, 500));
    wait.then(() => {
      this.flatList?.scrollToIndex({index: info.index, animated: true});
    });
  };

  refsView = (ref: any) => {
    this.flatList = ref;
  };

  keyExtractor = (_item: any, index: any) => String(index);

  back = () => {
    if (this.state.index <= 0) {
      return;
    }
    this.setState({index: this.state.index - 1}, () => {
      this.flatList.scrollToIndex({
        index: this.state.index,
        animated: true,
      });
    });
  };

  next = () => {
    const {data} = this.props;
    if (this.props.numberItems == 1) {
      if (this.state.index >= data.length - this.props.numberItems) {
        return;
      }
    } else {
      if (this.state.index >= data.length - this.props.numberItems) {
        return;
      }
    }
    this.setState(
      (preState: any) => ({...preState, index: preState.index + 1}),
      () => {
        this.flatList.scrollToIndex({index: this.state.index, animated: true});
      },
    );
  };

  onPressBtn = (isLeft?: boolean) => () => {
    if (isLeft) {
      this.back();
    } else {
      this.next();
    }
  };

  renderPagination = () => {
    let dot =
      this.props.numberItems == 1
        ? this.state.data.length
        : this.state.data.length - 1;
    return (
      <Pagination
        containerStyle={[
          styles.containerPagination,
          this.props.stylePagination,
        ]}
        dotsLength={dot}
        activeDotIndex={this.state.index}
        dotStyle={styles.dotStyle}
        dotContainerStyle={styles.containDot}
        inactiveDotStyle={styles.inactiveDotStyle}
        inactiveDotOpacity={1}
      />
    );
  };
  render() {
    const {
      renderItem,
      style,
      Pagination,
      snapToInterval,
      rightBtnStyle,
      leftBtnStyle,
    } = this.props;
    let snapToIntervalDefault = snapToInterval || wp('90');
    const {pageIndex, data} = this.state;
    return (
      <>
        <View style={style}>
          <TouchableOpacity
            onPress={this.onPressBtn(true)}
            hitSlop={styles.hitSlop}
            style={[
              styles.containBtn,
              {
                left: -wp(2.4),
              },
              leftBtnStyle,
            ]}>
            <FastImage
              source={require('../../../../assets/btnLeft.png')}
              style={{width: wp(3.8), height: wp(3.8)}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <FlatList
            onTouchStart={this.onTouchStart}
            onTouchEnd={this.onTouchEnd}
            ref={this.refsView}
            data={data}
            showsHorizontalScrollIndicator={false}
            extraData={this.props.extraData}
            renderItem={renderItem}
            horizontal={true}
            keyExtractor={this.keyExtractor}
            initialScrollIndex={pageIndex}
            snapToStart={true}
            snapToInterval={snapToIntervalDefault}
            snapToAlignment="center"
            viewabilityConfig={this.viewabilityConfig}
            onScrollToIndexFailed={this.retryScroll}
            onViewableItemsChanged={this.onViewableItemsChanged}
            snapToEnd={true}
          />
          <TouchableOpacity
            onPress={this.onPressBtn(false)}
            hitSlop={styles.hitSlop}
            style={[
              styles.containBtn,
              {
                right: -wp(2.4),
              },
              rightBtnStyle,
            ]}>
            <FastImage
              source={require('../../../../assets/btnRight.png')}
              style={{width: wp(3.8), height: wp(3.8)}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        {Pagination && this.renderPagination()}
      </>
    );
  }
}

const styles = StyleSheet.create({
  hitSlop: {top: 10, left: 10, right: 10, bottom: 10},
  containBtn: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: wp(5),
    height: wp(5),
    borderRadius: wp(2.5),
    top: '44%',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    ...elevationShadowStyle(4),
  },
  containDot: {
    marginHorizontal: wp('0.2'),
  },
  containerPagination: {
    width: wp(100),
    height: hp(10),
    position: 'absolute',
    bottom: -hp(6),
  },
  dotStyle: {
    width: wp('1.8'),
    height: wp('1.8'),
    borderRadius: wp('0.9'),
    backgroundColor: '#919EAB',
  },
  inactiveDotStyle: {
    width: wp('1.6'),
    height: wp('1.6'),
    borderRadius: wp('0.8'),
    backgroundColor: '#B6BEC890',
  },
});

import React from 'react';
import {View, StyleSheet, FlatList, FlatListProps} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export interface ListViewHorizontalProps<ItemT> extends FlatListProps<ItemT> {
  LoadingComponent?: React.ComponentType<any> | React.ReactElement | null;
  showLoadingComponent?: boolean;
}

export const ListViewHorizontal = <T extends any>(
  props: ListViewHorizontalProps<T>,
) => {
  const keyExtractor = (_item: any, index: number) => {
    return props.keyExtractor
      ? props.keyExtractor(_item, index)
      : String(index);
  };
  const itemSeparatorComponent = () => {
    return <View style={styles.separatorView} />;
  };
  const empty = React.useMemo(() => {
    if (props.showLoadingComponent && props.LoadingComponent) {
      return props.LoadingComponent;
    }
    return props.ListEmptyComponent;
  }, []);
  return (
    <FlatList
      {...props}
      contentContainerStyle={[
        styles.contentContainerStyle,
        props.contentContainerStyle,
      ]}
      ListEmptyComponent={empty}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={itemSeparatorComponent}
      data={props.data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  separatorView: {
    width: wp(2.2),
  },
  contentContainerStyle: {
    paddingHorizontal: wp(4),
    paddingBottom: 10,
  },
});

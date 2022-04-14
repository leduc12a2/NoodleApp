import React from 'react';
import {View, StyleSheet, FlatList, FlatListProps} from 'react-native';
export const ListColumn = (props: any) => {
  const {column, style, renderItemm, contentContainerStyle} = props;
  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flex: 1 / column,
        }}>
        {renderItemm(item)}
      </View>
    );
  };
  const keyExtractor = (_item: any, index: number) => {
    return props.keyExtractor
      ? props.keyExtractor(_item, index)
      : String(index);
  };
  const empty = () => {
    if (props.showLoadingComponent && props.LoadingComponent) {
      return props.LoadingComponent;
    }
    return props.ListEmptyComponent;
  };
  return (
    <View style={[_styles.container, style]}>
      <FlatList
        {...props}
        numColumns={column}
        renderItem={renderItem}
        ListEmptyComponent={empty()}
        keyExtractor={keyExtractor}
        contentContainerStyle={contentContainerStyle}
      />
    </View>
  );
};
const _styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

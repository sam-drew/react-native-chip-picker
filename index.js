import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

export default class RNChipPicker extends React.Component {
    render() {
        const style = StyleSheet.create({
            selected: {
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: '#007FFF',
                alignItems: 'center',
                justifyContent: 'center',
                flex: (1/this.props.items.length),
            },
            notSelected: {
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flex: (1/this.props.items.length),
            },
            firstItem: {
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
            },
            lastItem: {
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
            },
            container: {
                shadowColor: 'rgba(0,0,0, .2)', // IOS
                shadowOffset: { height: 2, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 5, //IOS
                backgroundColor: '#fff',
                elevation: 5, // Android,
                borderRadius: 10,
                alignSelf: 'stretch',
                flexDirection: 'row',
            }
        });

        var chips = [];
        for (i=0; i<(this.props.items.length); i++) {
            var chipStyle = [style.notSelected];
            const item = this.props.items[i];
            if (item == this.props.value) {
                chipStyle = [style.selected];
            };
            if (i == 0) {
                chipStyle.push(style.firstItem);
            } else if (i == (this.props.items.length - 1)) {
                chipStyle.push(style.lastItem);
            };
            var testText = 'Text';
            chips.push(
                <TouchableHighlight key={i} style={chipStyle} onPress={() => this.props.onValueSelect(item)}>
                    <View>
                        <Text>{item}</Text>
                    </View>
                </TouchableHighlight>
            );
        };

        return(
            <View style={style.container}>
                {chips}
            </View>
        );
    }
};

import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class RNChipPicker extends React.Component {
    render() {
        // Check & set the colour for selected chips.
        var selectedColour = '#007FFF';
        if (this.props.selectedColour != undefined) {
            selectedColour = this.props.selectedColour
        };

        const style = StyleSheet.create({
            selected: {
                backgroundColor: selectedColour,
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
                borderRadius: 10,
                alignSelf: 'stretch',
                flexDirection: 'row',
            }
        });

        var chips = [];
        for (i=0; i<(this.props.items.length); i++) {
            var chipStyle = [style.notSelected];
            const item = this.props.items[i];
            // Check if the chip being rendered has been selected.
            if (item == this.props.value) {
                chipStyle.push(style.selected);
            };
            // Check if the chip is the first or last in the list, if it is, make sure
            // that the correct corners are rounded.
            if (i == 0) {
                chipStyle.push(style.firstItem);
            } else if (i == (this.props.items.length - 1)) {
                chipStyle.push(style.lastItem);
            };
            chips.push(
                <TouchableOpacity key={i} style={chipStyle} onPress={() => this.props.onValueSelect(item)}>
                    <View>
                        <Text>{item}</Text>
                    </View>
                </TouchableOpacity>
            );
        };

        return(
            <View style={style.container}>
                {chips}
            </View>
        );
    }
};

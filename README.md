# React Native Chip Picker
A react native selector component.

Renders a list of items to be selected from into a group of chips to be clicked.

## Example Usage
A user is to input their veggieness. The items to be selected from are: Carnivore, Pescatarian, Vegetarian, Vegan.

```javascript
import ChipPicker from 'react-native-chip-picker';

<ChipPicker
    items={['Carnivore', 'Pescatarian', 'Vegetarian', 'Vegan']}
    value={this.state.value}
    onValueSelect={(selectedItem) => this.setState({value: selectedItem})}
/>
```

## Props

### `items`
A list of items to be rendered.

### `value`
The currently selected value.

### `onValueSelect`
A function which does something with the selected value.

### `selectedColour`
(Optional)

The colour which you would like the background of the selected item to be.

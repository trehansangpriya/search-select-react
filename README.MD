# search-select-react

A React component that accepts data Array of Objects and headers to search on multiple conditions and perform actions on select using click and keyboard events

## Installation

```bash
npm install search-select-react
```

```bash
yarn add search-select-react
```

## Usage

```javascript
import React from 'react';
import {SearchSelect} from 'search-select-react';

const data = [
                {
                id: 1,
                name: 'John Doe',
                email: 'john@mail.com',
                phone: '1234567890',
              },
              {
                id: 2,
                name: 'Jane Doe',
                email: 'jane@mail.com',
                phone: '0987654321',
              },
];

const searchBy = ['name', 'email', 'phone'];

const display = ['name', 'email'];

const onSelectAction = (selected) => {
  console.log(selected);
};

const onNoResultAction = () => {
  console.log('No result found');
};

const App = () => {
  return (
    <div>
      <SearchSelect
        data={data}
        search={searchBy}
        display={display}
        select={onSelectAction}
        noResults={onNoResultAction}
        noResultsText='No Results Found! Click to Add New.'
        placeholder='Search'
        label='Search'
        name={'search'}
        helperText='Search for a user'
      />
    </div>
  );
};

export default App;
```

## Styling

The component by default has no styling. You can style it using your own CSS or any css library like tailwindcss using the different class props available.

### List of styling class props

| Prop Name | Description | Default | Notes |
| --- | --- | --- | --- |
| wrapperClass | Class for the wrapper div | '' | |
| labelClass | Class for the label | '' | |
| inputClass | Class for the input | '' | |
| helperTextClass | Class for the helper text | '' | |
| resultContainerClass | Class for the result container | '' | |
| resultItemClass | Class for the result item | '' | |
| resultItemActiveClass | Class for the active result item | '' | Active State should be handled in the CSS |
| resultItemHoverClass | Class for the hovered result item | '' | Hover State should be handled in the CSS |

## All Props

| Prop Name | Type | Description | Required | Default |
| --- | --- | --- | --- | --- |
| data | Array | Array of Objects to search on | Yes | [ ] |
| search | Array | Array of keys to search on | Yes | [ ] |
| display | Array | Array of keys to display in the list | Yes | [ ] |
| select | Function | Function to perform on select | Yes | () => {} |
| noResults | Function | Function to perform on no results | No | () => {} |
| noResultsText | String | Text to display on no results | No | 'No Results Found! Click to Add New' |
| placeholder | String | Placeholder for the input | No | --- |
| label | String | Label for the input | No | --- |
| showLabel | Boolean | Show label for the input | No | true |
| name | String | Name for the input | No | --- |
| helperText | String | Helper text for the input | No | --- |
| showHelperText | Boolean | Show helper text | No | true |
| disabled | Boolean | Disable the input | No | false |
| required | Boolean | Make the input required | No | false |
| readOnly | Boolean | Make the input read only | No | false |
| wrapperClass | String | Class for the wrapper | No | --- |
| labelClass | String | Class for the label | No | --- |
| inputClass | String | Class for the input | No | --- |
| helperTextClass | String | Class for the helper text | No | --- |
| resultContainerClass | String | Class for the result container | No | --- |
| resultItemClass | String | Class for the result item | No | --- |
| resultItemActiveClass | String | Class for the active result item | No | --- |
| resultItemHoverClass | String | Class for the hover result item | No | --- |
| enterToSelect | Boolean | Select on enter key press | No | false |
| onChange | Function | Function to perform on change in the input box | No | () => {} |
| ...props | --- | Props for the input | No | --- |

## License

MIT © [trehansangpriya](https://github.com/trehansangpriya)

## Author

👤 **Trehan Sangpriya**

[Website](https://trehansangpriya.in)
[LinkedIn](https://linkedin.com/in/trehan-sangpriya)
[Twitter](https://twitter.com/trehansangpriya)
[GitHub](https://github.com/trehansangpriya)

## Show your support

Give a ⭐️ if this project helped you!

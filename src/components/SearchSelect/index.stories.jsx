import React from 'react'
import { storiesOf } from '@storybook/react'

import { SearchSelect } from './SearchSelect'

const stories = storiesOf('SearchSelect', module)

stories.add('SearchSelect', () => {
    return (
        <SearchSelect
            data={
                [
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
                ]
            }
            search={['name', 'email', 'phone']}
            display={['name', 'email', 'phone']}
            select={(item) => console.log(item)}
            noResults={() => console.log('No Results Found! Click to Add New.')}
            noResultsText='No Results Found! Click to Add New.'
            placeholder='Search'
            label='Search'
            name={'search'}
            helperText='Search for a user'
        />
    )
})
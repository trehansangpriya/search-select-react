import React, { useState } from 'react'

const SearchSelect = ({
    data = [],
    search = [],
    searchLength = 3,
    display = [],
    select = () => { },
    noResults = () => { },
    noResultsText = 'No Results Found! Click to Add New.',
    placeholder,
    label,
    showLabel = true,
    name,
    disabled = false,
    required = false,
    readOnly = false,
    wrapperClass,
    labelClass,
    inputClass,
    helperTextClass,
    resultContainerClass,
    resultItemClass,
    resultItemActiveClass,
    resultItemHoverClass,
    helperText,
    showHelperText = true,
    enterToSelect = false,
    onChange = () => { },
    ...props
}) => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState(data)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    const handleSearch = (e) => {
        if (searchValue === '') {
            setSearchResults(data)
            return
        }
        const results = data.filter(item => {
            return search.some(key => {
                return item[key].toLowerCase().includes(searchValue.toLowerCase())
            })
        })
        setSearchResults(results)
        // console.log(results)
        return
    }

    return (
        <div
            className={[
                wrapperClass,
                disabled && 'opacity-50',
            ].join(' ')}
            style={{
                pointerEvents: disabled ? 'none' : 'auto',
                position: 'relative',
            }}
        >
            {/* Input Label */}
            {showLabel && label &&
                <label
                    className={[
                        labelClass,
                    ].join(' ')}
                    htmlFor={name}
                >
                    {label}
                </label>
            }
            {/* Search Bar */}
            <input
                className={[
                    inputClass,
                ].join(' ')}
                style={{
                    pointerEvents: disabled ? 'none' : 'auto',
                }}
                type='text'
                placeholder={placeholder}
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    onChange(e)
                }}
                onKeyUp={handleSearch}
                name={name}
                required={required}
                readOnly={readOnly}
                disabled={disabled}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && enterToSelect) {
                        e.preventDefault()
                        if (searchResults.length > 0) {
                            select(searchResults[highlightedIndex])
                            setSearchValue('')
                            setSearchResults(data)
                        }
                        if (searchResults.length === 0) {
                            noResults()
                            setSearchValue('')
                            setSearchResults(data)
                        }
                    }
                    if (e.key === 'ArrowDown' && enterToSelect) {
                        e.preventDefault()
                        if (highlightedIndex < searchResults.length - 1) {
                            setHighlightedIndex(highlightedIndex + 1)
                        }
                    }
                    if (e.key === 'ArrowUp' && enterToSelect) {
                        e.preventDefault()
                        if (highlightedIndex > 0) {
                            setHighlightedIndex(highlightedIndex - 1)
                        }
                    }
                }}
                autoComplete='off'
                {...props}
            />
            {/* Helper Text */}
            {
                showHelperText && helperText && (
                    <small className={[
                        helperTextClass,
                    ].join(' ')}>
                        {helperText}
                    </small>
                )
            }
            {/* Search Results */}
            {
                searchValue.length > (searchLength - 1) && (
                    <div className={resultContainerClass}>
                        {
                            searchResults.length > 0 && searchResults.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={[
                                            resultItemClass,
                                            enterToSelect && highlightedIndex === index ? resultItemActiveClass : resultItemHoverClass,
                                        ].join(' ')}
                                        onClick={() => {
                                            select(item)
                                            setSearchValue('')
                                            setSearchResults(data)
                                        }}
                                    >
                                        {
                                            display.map((key, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                    >
                                                        {item[key]}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        {
                            searchResults.length === 0 && (
                                <div
                                    className={[
                                        resultItemClass,
                                        enterToSelect ? resultItemActiveClass : resultItemHoverClass,
                                    ].join(' ')}
                                    onClick={() => {
                                        noResults()
                                        setSearchValue('')
                                        setSearchResults(data)
                                    }}
                                >
                                    {noResultsText}
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SearchSelect
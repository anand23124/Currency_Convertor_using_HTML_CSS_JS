# Currency Converter

## Overview

This repository contains a Currency Converter implemented using APIs,HTML, CSS, and JavaScript. The Currency Converter allows users to convert between different currencies and provides a visually appealing interface with flags representing each currency.

## Features

- Currency selection: Choose the source and target currencies from a list.
- Real-time exchange rates: Fetches the latest exchange rates from a public API.
- Flag representation: Displays flags corresponding to selected currencies.
- Conversion result: Shows the converted amount instantly.

## Files

- `index.html`: The main HTML file containing the converter structure and layout.
- `style.css`: The CSS file for styling the converter.
- `script.js`: The JavaScript file containing the converter logic, DOM manipulation, and API calls.
- `codes.js`: The JavaScript file containing a `countryList` with currency codes and country code.

## Usage

To use the Currency Converter:

1. Clone the repository:

    ```bash
    git clone https://github.com/anand23124/currency-converter.git
    cd currency-converter
    ```

2. Open the `index.html` file in your web browser.

3. Select the source and target currencies from the dropdown menus.

4. Enter the amount to be converted.

5. The converted amount will be displayed along with flags representing the selected currencies.

## API Integration

This Currency Converter utilizes a public API to fetch real-time exchange rates and flags. The API used in this project is [Fixer](https://fixer.io/). You may need to sign up for an API key and replace the placeholder in the `script.js` file.

```javascript
const flag API = 'https://flagsapi.com/${countrCode}/flat/64.png;
const Currency API = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usa/inr.json`;

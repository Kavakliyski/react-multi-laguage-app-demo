// react
import * as React from 'react';

// format.js
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'


// styles
import './App.css';

const messages = {
    en: {
        heading: "Welcome to React",
        subheading: "Welcome to React again",
        description: "This is the real text"
    },
    bg: {
        heading: "Добре дошъл в реакт",
        subheading: "Добре дошъл в реакт пак",
        description: "Това е истинският текст"
    }
}


function App() {

    const [locale, setLocale] = React.useState("en");

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <select defaultChecked={locale}>

                        {['en', 'bg'].map((x) => (
                            <option key={x}>{x}</option>
                        ))}
                    </select>

                </p>
            </header>
        </div>
    );
}

export default App;


import { useState } from "react";
import i18n from "i18next";

import { Link } from "react-router-dom"

export const Header = () => {

    const [lang, setLang] = useState('en');
    const [count, setCount] = useState(0);

    const onClick = () => {

        i18n.changeLanguage(lang);

        setCount((previousCount) => previousCount + 1);

        if (lang === "bg") {
            setLang("en");
        } else if (lang === "en") {
            setLang("bg");
        }
    };

    return (
        <>
            <h3>{ count }</h3>
            <button onClick={onClick}>{lang}</button>
            <ol>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/demo">Demo</Link></li>
            </ol>
        </>
    )
}


import { useState } from "react";
import i18n from "i18next";


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

        </>
    )
}

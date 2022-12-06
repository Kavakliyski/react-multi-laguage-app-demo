import { useTranslation } from "react-i18next";


export const Home = () => {
    const { t } = useTranslation(["home"]);


    return (
        <div>
            <h1>{t("welcome")}</h1>
            <h2>{t("home")}</h2>
        </div>
    )
}

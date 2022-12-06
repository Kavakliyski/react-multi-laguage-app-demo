import { useTranslation } from "react-i18next";


export const Demo = () => {
    const { t } = useTranslation(["demo"]);

    return (
        <div>
            <ul>
                <li>{t("demo1")}</li>
                <li>{t("demo2")}</li>
                <li>{t("demo3")}</li>
            </ul>

        </div>
    )
}

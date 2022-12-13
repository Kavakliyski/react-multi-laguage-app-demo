import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";


i18n
    .use(Backend)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
		},
		fallbackLng: "bg",
		debug: false,
		ns: ["home", "demo"],

		interpolation: {
			espaceValue: false,
			formatSeparator: ",",
		},
		react: {
			wait: true,
		},
	});

export default i18n;
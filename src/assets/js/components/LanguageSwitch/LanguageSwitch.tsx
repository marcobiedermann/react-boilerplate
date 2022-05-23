import { useTranslation } from 'react-i18next';

interface LanguageSwitchProps {
  languages: string[];
}

function LanguageSwitch(props: LanguageSwitchProps): JSX.Element {
  const { languages } = props;
  const { i18n } = useTranslation();

  async function changeLanguage(lng: string): Promise<void> {
    await i18n.changeLanguage(lng);
  }

  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>
          <button onClick={() => changeLanguage(language)} type="button">
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

export type { LanguageSwitchProps };
export default LanguageSwitch;

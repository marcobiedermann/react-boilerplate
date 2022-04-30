import i18n from '../../i18n';

function changeLanguage(lng: string): void {
  i18n.changeLanguage(lng);
}

interface LanguageSwitchProps {
  languages: string[];
}

function LanguageSwitch(props: LanguageSwitchProps): JSX.Element {
  const { languages } = props;

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

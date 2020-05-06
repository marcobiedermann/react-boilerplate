import React from 'react';
import i18n from '../../i18n';

function changeLanguage(lng: string): void {
  i18n.changeLanguage(lng);
}

interface LanguageSwitchProps {
  languages: string[];
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = (props) => {
  const { languages } = props;

  return (
    <ul>
      {languages.map((language) => (
        <li key={language}>
          <button onClick={() => changeLanguage(language)}>{language}</button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;

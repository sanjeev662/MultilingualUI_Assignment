import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const languageOptions = [
        { value: 'ca_ES', label: 'Catalan' },
        { value: 'cs_CZ', label: 'Česky' },
        { value: 'da_DK', label: 'Dansk' },
        { value: 'de_DE', label: 'Deutsch' },
        { value: 'en_US', label: 'English' },
        { value: 'es_ES', label: 'Español' },
        { value: 'fr_FR', label: 'Français' },
        { value: 'hu_HU', label: 'Magyar' },
        { value: 'is_IS', label: 'íslenska' },
        { value: 'it_IT', label: 'Italiano' },
        { value: 'ja_JP', label: '日本語' },
        { value: 'ko_KR', label: '한국어' },
        { value: 'nl_NL', label: 'Nederlands' },
        { value: 'pl_PL', label: 'Polski' },
        { value: 'pt_BR', label: 'Português (BR)' },
        { value: 'ru_RU', label: 'Русский' },
        { value: 'zh_CN', label: '简体中文' },
        { value: 'zh_TW', label: '繁體中文' },
    ];

    const { selectedLanguage, updateLanguage } = useLanguage();

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        updateLanguage(selectedLanguage);
    };

    return (
        <nav className="navbar">
            <div className="select-container">
                <select value={selectedLanguage} onChange={handleLanguageChange}>
                    {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </nav>
    );
};

export default Navbar;

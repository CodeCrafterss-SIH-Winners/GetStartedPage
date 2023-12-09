function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const languageData = getLanguageData(selectedLanguage);

    // Update content based on the selected language
    document.getElementById('learnText').innerHTML = languageData.learnText;
    document.getElementById('getStartedText').innerHTML = languageData.getStartedText;
    document.getElementById('accountText').innerHTML = languageData.accountText;
    document.getElementById('enterIdText').innerHTML = languageData.enterIdText;
    document.getElementById('enterHereText').innerHTML = languageData.enterHereText;
    document.getElementById('enterPasswordText').innerHTML = languageData.enterPasswordText;
    document.getElementById('enterText').innerHTML = languageData.enterText;
}

function getLanguageData(language) {
    // Add translations for each language
    const translations = {
        'en': {
            learnText: 'THE FREE, FUN AND INTERACTIVE WAYS TO LEARN YOUR LAWS.',
            getStartedText: 'GET STARTED',
            accountText: 'I ALREADY HAVE AN ACCOUNT',
            enterIdText: 'Enter your ID',
            enterHereText: 'enter here',
            enterPasswordText: 'Enter your password',
            enterText: 'Enter',
        },
        'hi': {
            learnText: 'आपके कानून को सीखने के लिए मुफ्त, मजेदार और इंटरएक्टिव तरीके।',
            getStartedText: 'प्रारंभ करें',
            accountText: 'मेरे पास पहले से ही खाता है',
            enterIdText: 'अपना आईडी दर्ज करें',
            enterHereText: 'यहां दर्ज करें',
            enterPasswordText: 'अपना पासवर्ड दर्ज करें',
            enterText: 'प्रवेश करें',
        },
        // Add translations for other languages
    };

    return translations[language] || translations['en']; // Default to English if the selected language is not available
}
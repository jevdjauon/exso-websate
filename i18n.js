const NextI18Next = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

const localeSubpathVariations = {
    none: {
        en: 'en',
    },
    foreign: {
        sr: 'sr'
    },
    all: {
        en: 'en',
        sr: 'sr',
    },
};

module.exports = new NextI18Next({
    otherLanguages: ['sr'],
    localeSubpaths: localeSubpathVariations[localeSubpaths],
});

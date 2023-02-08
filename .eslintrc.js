module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    //  JSX ishlatilgan file larda otsupni nechtaligini bildiradi
    'react/jsx-indent': [2, 2],
    //  Jsx ishlatilgan file larda props larni otsupi nechtaligini bildiradi
    'react/jsx-indent-props': [2, 2],
    //  JSX ishlatilmagan file larda otsupni nechtaligini bildiradi
    indent: [2, 2],
    //  Jsx ishlatilgan .tsx file larda error chqarmasligi un kere
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    //  Absolute import larga error chiqishini oldini oladi
    'import/no-unresolved': 'off',
    // Naming import qilganda error chiqqanda errorni ochirish un
    'import/prefer-default-export': 'off',
    //  Ishlatilmagan o'zgaruvchilar bulsa error urniga warning chiqarish uchun
    'no-unused-vars': 'warn',
    //  Prop larda default qiymat bermagan bulsak error chiqishini ochirish uchun
    'react/require-default-props': 'off',
    // JSX ishlatilgan file larda react ni import qilinmasa error chiqmasligi uchun
    'react/react-in-jsx-scope': 'off',
    // Props larni spread qilib berib yuborganda warning chiqarish uchun
    'react/jsx-props-no-spreading': 'warn',
    // Component da Arror function ishlatganda error chiqishini uchirib quyish uchun
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    // Import qilganda file type ni yani .jsx, .tsx kabi larni yozmaganimizda error chiqishini uchirib quyish uchun
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // __ mana shunaqa pasgi chiziqla ishlatganimizda error emas warning chiqishi uchun
    'no-underscore-dangle': 'off',
    // Bu 1 ta qator da 100 tadan kup suz yozilganda xato bermasligi va bu limitni 180 ta qlib quyish uchun
    'max-len': ['error', { code: 180 }],
    // Bu bizga biron bir text ni translate qilmagan bulsak error beradi, MarkupOnly bizga faqat jsx file lar ichidagi translate qlinmagan textlargagina error chiqishini taminledi
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
  },
  // Bu globals ISDEV ga uxshagan global o'zgaruvhcilar ishlatganimizda error chiqmasligi uchun
  globals: {
    __IS_DEV__: true,
  },
};

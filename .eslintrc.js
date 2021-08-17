module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加prettier插件
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': [2, { caseSensitive: true('default') | false }]
  }
}

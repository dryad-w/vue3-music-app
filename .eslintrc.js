module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'space-before-function-paren': 0, // 方法名与括号之间不需要空格
    'indent': ['off', '2'], // 换行，两个制符
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off', // 允许用tab键
    'no-mixed-spaces-and-tabs': 'off', //允许混合spaces键和tab键
  }
}

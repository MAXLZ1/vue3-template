// Vue Eslint 地址： https://eslint.vuejs.org/rules/

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'], // 禁止使用分号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'no-alert': 1, // 禁止使用alert confirm prompt
    'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
    'no-eval': 2, //禁止使用eval
    'no-extra-parens': 2, // 禁止非必要的括号
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 1,
      },
    ], // 空行最多不能超过2行,文件末尾、开头最大空行不超过1行
    'no-nested-ternary': 1, //禁止使用嵌套的三目运算
    'no-return-assign': 1, // return 语句中不能有赋值表达式
    'no-var': 1, // 禁用var，用let和const代替
    'vue/component-name-in-template-casing': ['error', 'kebab-case'], // 组件标签<a-b /> not <AB>
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // 组件内name使用驼峰命名
    'vue/no-multiple-template-root': 0, // 关闭模板内单根节点
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false, // 按字母顺序
      },
    ],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ], // 组件实例大于2个property时，property间必须有空格
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0,
  },
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ],
    [
      "component",
      [
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]
    ]
  ]

}


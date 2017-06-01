const path = require('path')

module.exports = {
  "id": "prod_test",
  "viewports": [
    {
      "name": "phone",
      "width": 320,
      "height": 480
    }
  ],
  "scenarios": [
    {
      "label": "Example",
      "url": "http://localhost:8000/",
      "hideSelectors": [],
      "removeSelectors": [],
      "selectorExpansion": true,
      "selectors": [
        ".title"
      ],
      "readyEvent": null,
      "delay": 500,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions" : true
    }
  ],
  "paths": {
    "bitmaps_reference": path.resolve(__dirname, "backstop_data/bitmaps_reference"),
    "bitmaps_test": path.resolve(__dirname, "backstop_data/bitmaps_test")
  },
  "casperFlags": [],
  "engine": "phantomjs",
  "report": ["browser"],
  "debug": false
}

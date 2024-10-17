# UTMInsight: Lightweight UTM Parameter Tracking and Conversion Attribution

UTMInsight is a powerful, open-source JavaScript library for tracking UTM parameters and attributing conversions. Designed for seamless integration into websites, UTMInsight provides valuable insights into marketing campaign effectiveness, helping you optimize your ad spend and improve ROI. Brought to you by AdTrace.

[![GitHub stars](https://img.shields.io/github/stars/AdTraceAI/UTMInsight.svg)](https://github.com/AdTraceAI/UTMInsight)
[![GitHub license](https://img.shields.io/github/license/AdTraceAI/UTMInsight.svg)](https://github.com/AdTraceAI/UTMInsight/blob/main/LICENSE)
[![npm version](https://badge.fury.io/js/utminsight.svg)](https://badge.fury.io/js/utminsight)

## 🚀 Key Features

- 📊 Automatic capture of UTM parameters
- 🔗 Cross-page UTM parameter persistence
- 👁️ Page view tracking
- 💹 Conversion tracking with attribution to original UTM parameters
- 🔌 Easy integration with existing analytics setups

## 📦 Installation

Include the UTMInsight script in your HTML:

```html
<script src="https://cdn.example.com/utminsight.js"></script>
```

## Usage

UTMInsight automatically initializes and starts tracking page views and UTM parameters. To track a conversion:

```javascript
UTMInsight.trackConversion("signup", 50);
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development build: `npm run dev`
4. Build for production: `npm run build`
5. Run tests: `npm test`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [AdTrace AI](https://adtrace.ai)

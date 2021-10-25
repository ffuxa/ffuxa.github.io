const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader',
      },
      {
        test: /\.pdf$/,
        use: 'url-loader',
      },
      {
        test: /\.mp3$/,
        use: 'url-loader',
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "public/"),
  //   port: 3000,
  //   // publicPath: "http://localhost:3000/dist/",
  //   // hotOnly: true
  // },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

// module.exports = {
//   entry: `${__dirname}/src/index.js`,

//   output: {
//     path: `${__dirname}/dist`,
//     filename: 'bundle.js',
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               ['@babel/preset-env', { targets: "defaults" }],
//               ['@babel/preset-react']
//             ]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         loader: 'css-loader',
//       },
//       {
//         test: /\.(png|jpg)$/,
//         loader: 'url-loader',
//       },
//       {
//         test: /\.pdf$/,
//         loader: 'url-loader',
//       },
//       {
//         test: /\.mp3$/,
//         loader: 'url-loader',
//       }
//     ],
//   },
// };

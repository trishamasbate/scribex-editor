// Import necessary plugins and modules
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development", // Set the mode to development
    entry: {
      main: "./src/js/index.js", // Entry point for the main bundle
      install: "./src/js/install.js", // Entry point for the install bundle
    },
    output: {
      filename: "[name].bundle.js", // Output filename pattern
      path: path.resolve(__dirname, "dist"), // Output directory
      clean: true, // Clean the output directory before each build
    },

    // List of plugins used in the build process
    plugins: [
      // Generate HTML file using provided template and title
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "JATE",
      }),

      // Generate the Webpack PWA manifest for the text editor app
      new WebpackPwaManifest({
        fingerprints: false, // Disable fingerprinting for the icons
        name: "JATE Text Editor", // Full name of the app
        short_name: "JATE", // Short name of the app
        description: "A text editor that can be accessed through a browser", // Description of the app
        background_color: "#36454F", // Background color of the app
        theme_color: "#36454F", // Theme color of the app
        start_url: "./", // Start URL of the app
        publicPath: "./", // Public path for the app
        display: "standalone", // Display mode of the app
        icons: [
          {
            src: path.resolve("./src/images/logo.png"), // Path to the app icon
            sizes: [96, 128, 192, 256, 384, 512], // Different sizes of the app icon
            destination: path.join("assets", "icons"), // Destination directory for the icons
          },
        ],
      }),

      // Use Workbox to inject a service worker into the build
      new InjectManifest({
        swSrc: "./src-sw.js", // Source file for the service worker
        swDest: "src-sw.js", // Destination file for the service worker
      }),
    ],

    // Module rules for handling different file types
    module: {
      rules: [
        {
          test: /\.css$/i, // Rule for CSS files
          use: ["style-loader", "css-loader"], // Use style-loader and css-loader for CSS files
        },
        {
          test: /\.m?js$/, // Rule for JavaScript files
          exclude: /node_modules/, // Exclude node_modules directory
          use: {
            loader: "babel-loader", // Use babel-loader for JavaScript files
            options: {
              presets: ["@babel/preset-env"], // Use @babel/preset-env preset
              plugins: [
                "@babel/plugin-proposal-object-rest-spread", // Use object rest spread plugin
                "@babel/transform-runtime", // Use transform runtime plugin
              ],
            },
          },
        },
      ],
    },
  };
};
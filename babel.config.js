module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["module:react-native-dotenv"]] //Cargamos lo necesario para usardotenv  antes npm install react-native-dotenv
  };
};

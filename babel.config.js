module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
       [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@components': './src/components',
            '@form': './src/components/form',
            '@constants': './src/constants/',
            '@screens': './src/screens',
            '@api': './src/api',
            '@assets': './assets/',
            '@actions': './src/actions/',
            '@reducers': './src/reducers/'
          },
        },
      ],
    ],
  };
};

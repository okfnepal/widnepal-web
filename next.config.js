const withImages = require('next-images')
module.exports = withImages()
// module.exports = withImages({
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty',
//         tls: 'empty',
//         net: 'empty',
//       }
//     }
//
//     return config
//   }
// })

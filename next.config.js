

module.exports = {

    exportPathMap: async function (defaultPathMap,
        { dev, dir, outDir, distDir, buildId }) {

            return {
                '/': { page: '/' },
                '/harmony-engine': { page: '/harmony-engine' }
            };

    }

}
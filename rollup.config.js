import babel from 'rollup-plugin-babel'
 
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/main.js',
        format: 'umd',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
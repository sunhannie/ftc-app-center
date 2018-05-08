const minify = require('rollup-plugin-babel-minify');
const babel = require('rollup-plugin-babel');
// const bowerResolve = require('rollup-plugin-bower-resolve');

// import minify from 'rollup-plugin-babel-minify';
// import babel from 'rollup-plugin-babel';

export default {
  input: 'client/main.js',
  plugins: [
    // bowerResolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    minify()
  ],
  output: {
    file: 'public/scripts/main.js',
    format: 'iife',
  }
};



// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import replace from 'rollup-plugin-replace';
// import postcss from 'rollup-plugin-postcss';

// export default {
//   input: './src/js/index.js',
//   output:[
//     {
//       name:'FtcNav',
//       sourcemap: true,
//       file: './build/index.js',
//       format: 'umd'
      
//     },
//     {
//       name:'FtcNav',
//       sourcemap: true,
//       file: './build/index.es.js',
//       format: 'es'
//     },
//   ],


//   plugins: [
    
//     postcss({
//       modules: true
//     }),
    
//     babel({
//       exclude: 'node_modules/**'
//     }),

//     resolve({
//       jsnext: true,
//       main:true
//     }),

//   ],

// }
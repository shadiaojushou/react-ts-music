export const BASE_URL = 'http://localhost:5000'
export const TIME_OUT = 10000

// 区分开发环境和生产环境
// 方式2：依赖当前环境变量 development production
// let BASE_URL = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = 'http://localhost:5000'
// } else {
//   BASE_URL = 'http://localhost:5000'
// }

// export { BASE_URL }

//方式3.从定义的环境变量配置文件,加载变量
// 定义两个env文件,分别对应开发环境和生产环境,必须是REACT_APP_开头

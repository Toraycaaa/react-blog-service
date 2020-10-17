/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602060509380_7179';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };



  // 数据库配置
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '47.115.56.152',
      // port
      port: '3306',
      // username
      user: 'root-blog',
      // password
      password: 'root-blog',
      // database
      database: 'react-blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // egg安全配置
  config.security = {
    //关闭csrf检测
    　　　　csrf: {enable: false},
    //白名单
    　　　　domainWhiteList: [ '*' ]
    　　};
      config.cors = {
        origin: '*',
        credentials: true,  //允许Cook可以跨域
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
        };

  return {
    ...config,
    ...userConfig,
  };
};

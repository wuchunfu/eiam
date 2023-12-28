<div align="center">

<img src="https://user-images.githubusercontent.com/30397655/205442696-ccd32d07-2f7b-4335-8083-cac1d740b824.jpg" alt="logo" width="60%"/>

[![](https://img.shields.io/badge/JDK-17+-orange)](https://www.oracle.com/au/java/technologies/javase/jdk17-archive-downloads.html)
[![](https://img.shields.io/badge/MySQL-8.0%2B-brightgreen)](https://www.mysql.com/downloads/)
[![](https://img.shields.io/badge/License-AGPL%203.0-orange)](https://github.com/topaim/eiam/blob/master/LICENSE)
[![](https://img.shields.io/badge/Maven-3.5.0+-brightgreen.svg)](https://maven.apache.org)

[官方网站](https://eiam.topiam.cn) | [需求收集](https://github.com/topiam/eiam/issues/new) | [问题反馈](https://github.com/topiam/eiam/issues/new)

</div>

--------------------------

<div align="center">⭐️ 如果你喜欢 TOPIAM，请给它一个 Star，您的支持将是我们前行的动力。</div>

--------------------------

## 版权声明

开源不代表免费，`TOPIAM` 遵循 AGPL-3.0 开源协议发布，并提供技术交流学习，但绝不允许修改后和衍生的代码做为闭源的商业软件发布和销售！ 如果需要将本产品在本地进行任何附带商业化性质行为使用，请联系项目负责人进行商业授权，以遵守 AGPL 协议保证您的正常使用。

如果您**需要将本产品进行二次开发、更改并进行任何附带商业化性质行为使用**，请联系我们进行商业授权，以遵守 `AGPL-3.0` 协议保证您的正常使用。

目前在国内 `GPL` 协议**具备合同特征，是一种民事法律行为** ，属于我国《合同法》调整的范围。 `TOPIAM` 项目团队保留诉讼权利。

[相关案例：违反 `GPL` 协议赔偿 50 万，国内首例！](https://mp.weixin.qq.com/s/YQ6sNjbDS-P7BViLZIsaoA)

> 本项目采用 `AGPL` 开源协议（抄袭牟利索赔100万）。

> 使用必须遵守国家法律法规，不允许非法项目使用，后果自负。

## 项目介绍

**TopIAM** 数字身份管控平台，简称：EIAM（Employee Identity and Access Management），
用于管理企业内员工账号、权限、身份认证、应用访问，帮助整合部署在本地或云端的内部办公系统、业务系统及三方 SaaS
系统的所有身份，实现一个账号打通所有应用的服务。

## 系统架构

![](https://github.com/topiam/eiam/assets/30397655/dc2c2749-e873-4d4d-ba20-43d5db81c6b8)

## 核心特性

+ 提供统一组织信息管理，多维度建立对应关系，实现在一个平台对企业人员、组织架构、应用信息的高效统一管理。
+ 支持钉钉、飞书、企业微信等身份源集成能力，实现系统和企业OA平台数据联动，以用户为管理基点，结合入职、离职、调岗、兼职等人事事件，关联其相关应用权限变化而变化，保证应用访问权限的安全控制。
+ 支持多因素认证，行为验证码、社交认证，融合认证等机制，保证用户认证安全可靠。
+ 支持微信、微博、QQ等社交认证集成，使企业具有快速纳入互联网化认证能力。
+ 支持 `SAML2`，`OAuth2`，`OIDC`，`CAS`，表单代填等认证协议及机制，实现单点登录功能，预配置大量 SaaS 应用及传统应用模板，开箱即用。
+ 完善的安全审计，详尽记录每一次用户行为，使每一步操作有据可循，实时记录企业信息安全状况，精准识别企业异常访问和潜在威胁的源头。
+ 提供标准`REST`和`SCIM2.0`接口轻松完成机构用户同步，实现企业对于账号生命周期的精细化管理。
+ 开源、安全、自主可控。

## 功能描述

| 功能模块 | 功能项      | 功能描述                       |
|:-----|:---------|:---------------------------|
| 账户管理 | 组织与用户    | 支持组织与用户维护。                 |
|      | 用户组管理    | 支持用户组维护。                   |
|      | 身份源管理    | 支持通过钉钉、飞书等途径同步用户和组织信息到系统。  |
| 认证管理 | 认证提供商    | 支持配置多种认证源，用户可通过不同方式登录门户。   |
| 应用管理 | OIDC协议应用 | 支持通过OIDC协议进行应用SSO。         |
|      | 表单代填应用   | 支持表单代填方式进行应用SSO。           |
|      | JWT协议应用  | 支持JWT协议进行应用SSO。            |
| 行为审计 | 用户行为     | 记录企业用户相关操作行为记录。            |
|      | 管理员行为    | 记录管理员相关操作记录。               |
| 安全设置 | 通用安全     | 支持通用安全配置，及安全防御策略。          |
|      | 密码策略     | 支持配置用户密码全局规则策略。            |
|      | 系统管理员    | 负责维护系统用户配置等。               |
| 系统设置 | 消息设置     | 支持配置维护邮件模版、邮件服务、短信服务。      |
|      | IP地理库    | 支持配置IP地理库，实现精准IP定位。        |
|      | 存储配置     | 支持配置云存储服务，如阿里云、腾讯云、MinIO等。 |
| 系统监控 | 会话管理     | 支持查看系统登录会话，支持回话下线。         |

## 在线演示

+ 管理端：https://eiam-console.topiam.cn
  > 体验账号：admin/topiam.cn
+ 用户端：https://eiam-portal.topiam.cn
  > 体验账号：portal/topiam.cn

## 技术架构

- **后端**：[Spring Boot](https://spring.io/projects/spring-boot/) 、[Spring Security](https://spring.io/projects/spring-security/)
- **前端**：[React.js](https://react.dev/) 、[Ant Design](https://ant.design)
- **中间件**：[MySQL](https://www.mysql.com/) 、[Redis](https://redis.io/)、[ElasticSearch](https://www.elastic.co/cn/elasticsearch/)、[RabbitMQ](https://www.rabbitmq.com/)
- **基础设施**：[Docker](https://www.docker.com/)

## 安装部署

+ [本地部署](https://eiam.topiam.cn/docs/deployment/deployment-local/)
+ [Docker部署](https://eiam.topiam.cn/docs/deployment/deployment-local/)
+ [K8S部署](https://eiam.topiam.cn/docs/deployment/deployment-k8s/)
+ [更多方式](https://eiam.topiam.cn/docs/deployment/)


## 用户登记

如果您和您的公司或组织使用了 TopIAM 企业身份管控平台 ，非常感谢您的支持与信任，请在此进行登记，您的回复将成为维护者、社区用户和观望者的信心来源。感谢支持 💖

**我们会优先支持登记用户的需求及问题反馈。**

>登记信息仅用于推广本产品～

[点击进行接入登记](https://gitee.com/topiam/eiam/issues/I7SAJK)

+ 浙江智慧江能技术服务股份有限公司
+ 广东省印象华云数据有限公司
+ 宁波甬承电子科技有限公司
+ 山东爱特云翔信息技术有限公司
+ 北京中科生活服务有限公司
+ 四维世景北京(科技)有限公司
+ 抹香鲸跨境电子商务有限公司
+ 杭州天象聚合信息技术有限公司
+ 烟台派创软件有限公司
+ 四川小仙信息技术有限公司
+ 成都益新臣辉科技有限公司
+ 贵州南智云数字产业发展有限公司
+ 青岛南邮信息技术有限公司
+ 福州创汇科技有限公司
+ 杭州群核信息技术有限公司
+ 深圳市佳信捷智慧物联有限公司
+ 南京优达创信息技术有限公司
+ 西安恒德天云信息技术有限公司
+ 北京盛云致臻智能科技有限公司
+ 大连车联信息技术有限公司

## 微信公众号

欢迎关注 TopIAM 微信公众号，接收产品最新动态。

![](https://user-images.githubusercontent.com/30397655/206887629-faf77f3e-1681-4918-99bf-773ef434f088.png)

## 交流群

![](https://eiam.topiam.cn/assets/images/group-qr-code-56e2f7dd5f440f90c428645b264e43f8.png)

## 参与贡献

我们强烈欢迎有兴趣的开发者参与到项目建设中来，同时欢迎大家对项目提出宝贵意见建议和功能需求，项目正在积极开发，欢迎 PR 👏。

强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545)
和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)
，更好的问题更容易获得帮助。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=topiam/eiam&type=Date)](https://star-history.com/#topiam/eiam&Date)

## FOSSA Status

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftopiam%2Feiam.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftopiam%2Feiam?ref=badge_large)

## License

<img src='https://www.gnu.org/graphics/agplv3-with-text-162x68.png' alt="license">

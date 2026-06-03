## 上马自动签到 [![Run Auto Sign](https://github.com/eee77777777777777777777777/shangma_auto_sign/actions/workflows/auto-sign.yaml/badge.svg)](https://github.com/eee77777777777777777777777/shangma_auto_sign/actions/workflows/auto-sign.yaml)

### 基于 Node.js + GitHub Action 实现上海马拉松官网每日签到

### 使用方法

1. Fork 本项目（顺手点 Star 以示鼓励）
2. 在 Repo 的 Setting 页面，添加名为上马官网的用户名：`SM_USERNAME` 和密码：`SM_PASSWORD` 的 Secret
3. 手动测试运行

在控制台应该能看到 `签到成功/请勿重复签到` 的提示。

### 关于执行时间
签到 Job 执行时间是 UTC 时间 0 点，也就是北京时间 8 点执行。不过由于 GitHub 的负载比较重，真正签到时间可能延后一段时间，一般是几十分钟，这个延迟时间取决于 GitHub Action 的负载。

### 声明
- 本项目仅做学习交流，禁止用于各种非法途径

最末签到：2025-07-07 (北京时间)

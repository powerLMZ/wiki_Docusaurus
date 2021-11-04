---
id: 基础理论-USB接线
title: 基础理论-USB接线
---

电脑常用的USB口都是2.0

USB口的通信方式： 主从模式，主机叫Host，从机叫Device（也叫作设备），可以一主多从。

芯片上的USB口可以自己配置为主机或者从机，**具体通过硬件配置还是软件配置要看芯片手册。

- **在USB主机上，D-和D+都接了15K下拉电阻到地，所以没有设备接入时，D+和D-都是低电平。

- **在USB设备中，如果是高速设备，D+上接一个1.5K上拉电阻到VCC；如果是低速设备，D-上接入一个1.5k上拉电阻到VCC。这样主机就能判断是否有设备接入，接入的设备是高速还是低速设备。

![](https://github.com/powerLMZ/picture/blob/master/USB%E8%BF%9E%E7%BA%BF%E6%96%B9%E5%BC%8F.jpg?raw=true)


## 参考与致谢


> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

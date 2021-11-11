---
id: 通信协议-nand flash
title: 通信协议-nand flash
---

最近买了韦东山的板子学习linux，这里是他课程里面的关于nand flash的笔记

## nand flash

电路图如下：

![](https://github.com/powerLMZ/picture/blob/master/nand%20flash%20%E7%94%B5%E8%B7%AF%E5%9B%BE.jpg?raw=true)

datasheet description:

![](https://github.com/powerLMZ/picture/blob/master/nand%20flash%20pin.png?raw=true)

- IO0~IO7:既可以互传数据，也可以2440给NAND芯片传地址和命令。

- CLE/ALE:当CLE为高电平时，表示命令;当ALE为高电平时，表示地址;当CLE和ALE都不为高电平时，表示数据.

- CE:高电平时忽略，不回应2440的所有指令,低电平时，则被选中，回应指令。

- WE(写保护):当这个引脚为低电平，那么2440只能在NAND上读取。不能写、不能擦除。

- R/B：高电平表示READY，内部操作已经完成，低电平表示BUSY，内部还在进进行操作。（是否完成烧录）

- RE（读信号）、WE（写信号）:当RE为低电平时，数据从NAND到2440;当WE为低电平时，数据从2440到NAND.


## 参考与致谢

- [基本元器件- 理论基础](https://wiki-power.com)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

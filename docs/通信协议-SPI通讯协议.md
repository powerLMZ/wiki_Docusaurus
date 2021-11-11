---
id: 通信协议-SPI通讯协议
title: 通信协议-SPI通讯协议
---

SPI，是一种高速的，全双工，同步的通信总线，.SPI 只能有一个主机，可连接一个或多个从机。连接多设备时，需要用到片选引脚（chip select，CS），SPI总线有三线和四线。

SPI通信的速率可高达40MHZ，在使用一些电平转换电路时要考虑开关管的导通速率，是否能满足要求。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20210911095950.png)

## SPI的引脚

- **SCLK**（serial clock）：由主机驱动的方波时钟信号，从端为输入采样。SDO 和 SDI 上的信号根据 SCLK 上的时钟信号来进行锁存操作。一个时钟周期传输 1bit 数据，所以传输速率等同于主机产生的时钟频率。

- **三线SDI/O 四线MISO MOSI（serial data in / serial data out）**：描述了相对于主机的数据流的方向，SDO 在主机上是 MOSI，在从机上是 MISO；而 SDI 在主机上是 MISO，在从机上是 MOSI。、

- **CS**（chip select / slave select）：由主机驱动，用于仲裁 SPI 总线上通信的优先级。当 CS 线上为低电平时，就会激活 SPI 通信。CS 是低电平有效。

## SPI通信的四种模式

时钟极性(CPOL)定义了时钟空闲状态电平：

- CPOL=0，表示当SCLK=0时处于空闲态，所以有效状态就是SCLK处于高电平时。

- CPOL=1，表示当SCLK=1时处于空闲态，所以有效状态就是SCLK处于低电平时。

时钟相位(CPHA)定义数据的采集时间：

- CPHA=0，在时钟的第一个跳变沿（上升沿或下降沿）进行数据采样。，在第2个边沿发送数据。

- CPHA=1，在时钟的第二个跳变沿（上升沿或下降沿）进行数据采样。，在第1个边沿发送数据。

| 模式编号 | CPOL（时钟极性） | CPHA（时钟相位）          | 锁存边沿 |
| -------- | ---------------- | ------------------------- | -------- |
| 0        | 0（低电平）      | 0（在第一个边沿进行锁存） | 上升沿   |
| 1        | 0（低电平）      | 1（在第二个边沿进行锁存） | 下降沿   |
| 2        | 1（高电平）      | 0（在第一个边沿进行锁存） | 下降沿   |
| 3        | 1（高电平）      | 1（在第二个边沿进行锁存） | 上升沿   |

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211026162028.png)

## 参考与致谢

- [基本元器件- 理论基础](https://wiki-power.com)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

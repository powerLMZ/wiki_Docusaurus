---
id: 基础理论-IIC通讯协议
title: 基础理论-IIC通讯协议
---

## IIC描述
 IIC 总线在物理连接上非常简单，分别由SDA(串行数据线)和SCL(串行时钟线)及上拉电阻组成。通信原理是通过对SCL和SDA线高低电平时序的控制，来产生I2C总线协议所需要的信号进行数据的传递。在总线空闲状态时，这两根线一般被上面所接的上拉电阻拉高，保持着高电平。

![](https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20211026174634.png)

I2C通信属于串行通信，使用串行数据线SDA和串行时钟线SCL两线实现同步半双工通信。

半双工通信：能够双向通信，但通信双方不能同时进行数据收发，在同一时刻只有一方发送另一方接收能够双向通信，但通信双方不能同时进行数据收发，在同一时刻只有一方发送另一方接收。

## IIC的地址

IIC总线上的每个设备都必须有一个唯一的地址，在使用IIC通信的模块芯片的手册有（从机地址）The slave address of the 模块名 is SAD=1011010.

1011010前面补0到8位:01011010=0x5A.

在PCB板上要标default addr 0x5A.

## IIC通信

- **起始信号**：主机在 SCL 为高时，拉低 SDA 发起。

- **终止信号**：主机在 SCL 为高时，释放 SDA（变为高电平）发起。

![](https://img-blog.csdn.net/20150907161226553?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)


## 参考与致谢

- [基本元器件- 理论基础](https://wiki-power.com)
-[IIC总线协议详解](https://blog.csdn.net/dahailinan/article/details/108948748?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163547360816780269872354%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=163547360816780269872354&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-6-108948748.pc_search_result_cache&utm_term=iic%E9%80%9A%E4%BF%A1%E5%8D%8F%E8%AE%AE&spm=1018.2226.3001.4187)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

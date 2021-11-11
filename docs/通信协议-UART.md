---
id: 通信协议-UART
title: 通信协议-UART
---


## UART 

通用异步收发器简称UART

它只需要三条线，TxD用来发送数据，RxD用来接收数据，以及一根接地线Gnd。UART使用双方只要使用三根线就能进行通信。

**拓扑如下：**

![](https://github.com/powerLMZ/picture/blob/master/UART.png?raw=true)

一般在发送之前，收发双方都要先约定好一定的规则：

- 传输数据的速率（每位所占据的时间，其倒数就是波特率）；

- 数据格式（每帧包含多少位数据，包含开始位、数据位（5~8 bit）、校验位（可有可无）和停止位（1~2 bit））。

特点：

- TX，RX在空闲时状态都为逻辑1

- 先发送字节低位，再发送字节高位

- 起始位：先发出一个逻辑0的信号，标识传输数据的开始。

- 数据位：紧接起始位之后，数据位个数可以是7位、8位、9位长

- 校验位：可选，有下面几种校验方式：奇校验，数据位和校验位中逻辑1的个数为奇数；偶校验，数据位和校验位中逻辑1的个数为偶数；0校验，校验位总是为逻辑0；1校验，校验位总是为逻辑1；无校验，不包含校验位

- 结束位：由0.5位、1位、1.5位或2位逻辑1表示

- 波特率：bps，每秒钟传输位数，例如115200bps，就是1s中传输115200个数据位，1个数据位占用时间就是1/115200s

**数据格式如下：**

![](https://github.com/powerLMZ/picture/blob/master/UART12.png?raw=true)

## 流控

- RTS : 请求发送， 作为输出口

- CTS : 允许发送，作为输入口


## 参考与致谢

- [UART协议](https://blog.csdn.net/lee_jimmy/article/details/81607472?ops_request_misc=&request_id=&biz_id=102&utm_term=UART%E5%8D%8F%E8%AE%AE&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-81607472.first_rank_v2_pc_rank_v29&spm=1018.2226.3001.4187)
- [UART协议](https://blog.csdn.net/weixin_41572450/article/details/85038343?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_utm_term~default-1.no_search_link&spm=1001.2101.3001.4242.2)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

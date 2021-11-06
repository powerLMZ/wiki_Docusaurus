---
id: 高效工作指南-测量IC引脚是否虚焊
title: 高效工作指南-测量IC引脚是否虚焊
---

要判断焊上去的芯片引脚是否虚焊，除了拿放大镜观察以外，还可以通过万用表判断。

## 芯片内部引脚电路

单片机的IO引脚保护引入二极管的钳位保护电路，单片机内部已集成此保护电路。

![](https://github.com/powerLMZ/picture/blob/master/%E4%BA%8C%E6%9E%81%E7%AE%A1%E9%92%B3%E4%BD%8D%E7%94%B5%E8%B7%AF.jpg?raw=true)

连结VDD为D2,连接VSS为D1，具体的工作原理：

- **当Vin电压大于VDD时**，显然D2二极管导通，D1二极管截止关闭，在一定范围内，电流从Vin流向VDD,防止直接接触芯片内核；

- **当Vin电压在VDD与VSS之间时**，则D1与D2二极管均截止关闭；

- **当Vin电压小于VSS时**，显然D1二极管导通，D2二极管截止关闭，在一定范围内，电流从VSS流向Vin，防止直接接触芯片内核；

正常单片机内部已集成此保护电路，利用万用表的二极管档位，可以判断芯片的引脚是否虚焊。

## 测量

![](https://github.com/powerLMZ/picture/blob/master/%E4%BA%8C%E6%9E%81%E7%AE%A1%E6%A1%A3%E4%BD%8D%E6%B5%8B%E9%87%8F%E6%98%AF%E5%90%A6%E8%99%9A%E7%84%8A.jpg?raw=true)

万用表的二极管档位会显示二极管的正向压降值。

红黑表笔根据测量二极管的不同有两种接法（红一黑一和红二黑二）

## 注意

**红黑表笔的探头相对于引脚比较大，直接接触芯片引脚容易短路两个引脚，造成短路；并且直接用表笔直接接触引脚，容易造成表笔挤压芯片，使测量结果不准确，建议表笔接触和在PCB板上和引脚直接相连的焊盘。**

## 参考与致谢

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

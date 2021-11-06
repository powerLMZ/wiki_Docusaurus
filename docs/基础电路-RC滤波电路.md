---
id: 基础电路-RC滤波电路
title: 基础电路-RC滤波电路
---

## RC低通滤波电路

**电路图如下**

![](https://github.com/powerLMZ/picture/blob/master/11.jpg?raw=true)

电容的阻抗Xc=1/2Πfc      f：Ui电流频率      C:电容值

Uo和电容并联，根据分压公式Uo=Xc/(Xc+R)*Ui

当f频率越大时，电容的阻抗越小，更多的电流从电容上流回去，越少的电流输出到Uo。

当f频率越小时，电容的阻抗越大，更少的电流从电容上流回去，越多的电流输出到Uo。

**波形图**

纵坐标表示信号的衰减程度

横坐标表示输入信号的频率

![](https://github.com/powerLMZ/picture/blob/master/12.jpg?raw=true)

频率比较低时，电容的阻抗XC很大，电流几乎从Uo输出，在一定范围内，这个Uo几乎没什么衰减。随着输入电流频率的增大，电容的阻抗XC越来越小，Uo开始衰减，当输入电流频率到大于fc（截止频率），衰减超过3dB，认为Uo那边得不到一个正常输出（失真）。此时fc（截止频率）=1/2ΠRC

## RC高通滤波电路

**电路图如下**

![](https://github.com/powerLMZ/picture/blob/master/13.jpg?raw=true)

电容的阻抗Xc=1/2Πfc   

Uo和电容并联，根据分压公式Uo=R/(Xc+R)*Ui

**波形图**

纵坐标表示信号的衰减程度

横坐标表示输入信号的频率

![](https://github.com/powerLMZ/picture/blob/master/14.jpg?raw=true)

当频率比较低时，电容的阻抗XC很大，电流几乎穿过电容输出，随着输入电流频率的增大，电容的阻抗XC越来越小，Uo开始有输出并逐渐增大，当输入电流频率到大于fc（截止频率），认为Uo那边得到一个正常输出。（不失真）
fc（截止频率）=1/2ΠRC

## RC带通滤波电路

**电路图如下**

![](https://github.com/powerLMZ/picture/blob/master/15.jpg?raw=true)

**波形图**

![](https://github.com/powerLMZ/picture/blob/master/16.jpg?raw=true)

fc1（截止频率）=1/2ΠR1C1

fc2（截止频率）=1/2ΠR2C2

## RC带阻滤波电路

**电路图如下**

![](https://github.com/powerLMZ/picture/blob/master/17.jpg?raw=true)


fc1（截止频率）=1/2ΠR1C1

fc2（截止频率）=1/2ΠR2C2

## 参考与致谢

- [电子元器件038-【电阻应用】利用电阻构建简单的RC滤波电路-Neo](https://www.bilibili.com/video/BV1gv41137E9?spm_id_from=333.999.0.0)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

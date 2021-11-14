---
id: linux学习笔记-多线程
title: linux学习笔记-多线程
---

## 多线程

 线程是进程的一个实体，是CPU调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。线程自己基本上不拥有系统资源，只拥有一点在运行中必不可少的资源(如程序计数器，一组寄存器和栈)，但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。

### 进程和线程的区别

对linux来说进程和线程都是一个任务，  进程独占一个地址空间，线程共享一个地址空间，进程在切换时系统开销大，使用线程的好处：提高了任务切换的频率，减少一些资源的使用。

### 线程的创建
     
包含pthread.h头文件

函数有4个参数

int pthread_create (pthread_t *thread,//新创建的线程ID，线程对线
			   const pthread_attr_t *arr//线程属性
			   void *(*routine) (void *),//新创建的线程从start_routine开始执行
			   void *arg)//执行函数的参数 arg是传给routine函数的参数

### 线程的回收

包含pthread.h头文件
         
 函数有2个参数        

int pthread_join (pthread_t thread,void **retval)
- 参数thread：要回收的线程的对线
- 参数*retval:接收线程thread的返回值

### 线程的结束

包含pthread.h头文件

void pthread_exit (void *retval）；

*retval  线程的地址

## 参考与致谢

- [linux-多线程](https://blog.csdn.net/lanyan822/article/details/7586845?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163686827316780261989179%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=163686827316780261989179&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-7586845.first_rank_v2_pc_rank_v29&utm_term=linux%E5%A4%9A%E7%BA%BF%E7%A8%8B&spm=1018.2226.3001.4187)

> 文章作者：**Power LMZ**  
> 原文地址：https://wiki-docusaurus-orpin.vercel.app/  
> 版权声明：文章采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by/4.0/deed.zh) 协议，转载请注明出处。

# 第一周學習紀錄
1.git and github 的熟悉及應用學習

2.command line 的指令熟悉
***
## git 及 github 

### 前置環境設置

1.cmder下載

很接近 LINUX 的使用手感  推推  上官網下載  [cmder](https://cmder.net/) 如果電腦本身已經有下載 git for windows 的話下載 mini 版本就可以 第一次用的下載 full 版本就直接有附在裡面了。

設定詳情參考[這裡](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder)

2.git 介紹

git 透過本地端(local)及remote(遠端)進行檔案的上傳及同步，使用者可以在 local 進行修改，修改完在選擇要上載哪一個版本的檔案。

git 本身分成三個區域: 工作區(working directory)、暫存區(staging area)、檔案庫(repositories)

* 工作區: 還沒被 add 列入觀察的檔案 *
* 暫存區: 透過指令 git add 從工作區列入暫存區 *
* 檔案庫: 暫存區的檔案再透過 git commit 進入檔案庫進行儲存 *

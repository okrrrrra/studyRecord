# 第一周學習紀錄
1. git and github 的熟悉及應用學習

2. command line 的指令熟悉
***
## git 及 github 

### 前置環境設置

1. cmder下載

很接近 LINUX 的使用手感  推推  上官網下載  [cmder](https://cmder.net/) 如果電腦本身已經有下載 git for windows 的話下載 mini 版本就可以 第一次用的下載 full 版本就直接有附在裡面了

設定詳情參考[這裡](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder)

2. git 介紹

git 透過本地端 (local) 及remote (遠端) 進行檔案的上傳及同步，使用者可以在 local 進行修改，修改完在選擇要上載哪一個版本的檔案

git 本身分成三個區域: 工作區 (working directory) 、暫存區 (staging area) 、檔案庫 (repositories) 

* **工作區: 還沒被 add 列入觀察的檔案**
* **暫存區: 透過指令 git add 從工作區列入暫存區**
* **檔案庫: 暫存區的檔案再透過 git commit 進入檔案庫進行儲存**

進入到 local repo 的資料可以再透過  git push origin master 跟 git pull origin master 上傳到遠端或是下載至本地

3. git 使用者設定

一開始都要先進行使用者的設定，之後的資料傳輸也都會透過者個使用者ID進行傳輸

```
  git config --global user.name "user name"

  git config --global user.email "mail name"
```

4.建立 repository (檔案庫)

repository 在 github 上是類似專案資料夾的地方 在電腦上就直接新增一個資料夾當作我們要進行 git 控制的地方就可以了

```
  mkdir "file name"
```

新增完就進入資料夾建立第一個文件

```
  cd "file name"

  touch "file name"
  
  git init  //將資料夾建置成 git 版控的狀態
```

這時資料夾內新增了一個 .git 檔就代表建置成功了

5.git 狀態檢視及修改新增 commit 

```
  git status //狀態檢視
  
  git add "file name"  //將檔案加入追蹤
  
  git diff  //查看跟上次 commit 的差異
  
  git commit -m "message about what u do this time"  //將檔案commit 進入repository
```

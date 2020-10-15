# 第一周學習紀錄
1. git and github 的熟悉及應用學習

2. command line 的指令熟悉
***
## git 及 github 

### 前置環境設置

1.  cmder下載

很接近 LINUX 的使用手感  推推  上官網下載  [cmder](https://cmder.net/) 如果電腦本身已經有下載 git for windows 的話下載 mini 版本就可以 第一次用的下載 full 版本就直接有附在裡面了

設定詳情參考[這裡](https://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder)

2.  git 介紹

git 透過本地端 (local) 及remote (遠端) 進行檔案的上傳及同步，使用者可以在 local 進行修改，修改完在選擇要上載哪一個版本的檔案

git 本身分成三個區域: 工作區 (working directory) 、暫存區 (staging area) 、檔案庫 (repositories) 

* **工作區: 還沒被 add 列入觀察的檔案**
* **暫存區: 透過指令 git add 從工作區列入暫存區**
* **檔案庫: 暫存區的檔案再透過 git commit 進入檔案庫進行儲存**

進入到 local repo 的資料可以再透過  git push origin master 跟 git pull origin master 上傳到遠端或是下載至本地

3.  git 使用者設定

一開始都要先進行使用者的設定，之後的資料傳輸也都會透過者個使用者ID進行傳輸

```
  git config --global user.name " user name "

  git config --global user.email " mail name "
```

4.  建立 repository (檔案庫)

repository 在 github 上是類似專案資料夾的地方 在電腦上就直接新增一個資料夾當作我們要進行 git 控制的地方就可以了

```
  mkdir " file name "
```

新增完就進入資料夾建立第一個文件

```
  cd " file name "

  touch " file name " 
  
  git init  //將資料夾建置成 git 版控的狀態
```

這時資料夾內新增了一個 .git 檔就代表建置成功了

5.  git 狀態檢視及修改新增 commit 

```
  git status //狀態檢視
  
  git add " file name "  //將檔案加入追蹤
  
  git diff  //查看跟上次 commit 的差異
  
  git commit -m " message about what u do this time "  //將檔案 commit 進入 repository
```

若是要查看 commit 過甚麼的紀錄

log 呈現方式會是這樣:

* commitID   message 

```
  git log --oneline  //查看簡潔的 commit 紀錄

  git checkout commit ID  //可以回到該 commit 時的資料狀態

  git checkout master  //若要切換回當前版本則是輸入這樣
```

要反悔取消 commit 可以用以下程式碼

```
  git rm --cached " file name " //還沒 commit 的修改可以透過這樣回到工作區

  git reset HARD  //可以把資料還原到head的狀態
```

修改後的檔案都要記得再一次進行 add & commit 的動作

```
  git commit -am " message "
```

到剛剛都是在local端進行，接下來要把檔案跟遠端連結，要先申請一個 github 帳號 [Github](https://github.com/)，並在 git 加入使用者帳號

```
  git config --global user.username " ur github account "
```

在 github 右上角新增一個 repository，create 完成後就建立了一個資料庫!

  `.gitignore`  :一些要讓 git 忽略的資料，通常會把一些比較私人的使用者資料丟進去

  `README.md` :在 repository 第一面會出現的 markdown 語法寫成的檔案，通常是一些注意事項或使用者須知

  `LICENSE` :專案使用何種授權方式

  再來就是本地端跟遠端的連接

```
  git remote add origin " reposotory address "  //讓本地端跟遠端對應

  git status  //觀看狀況

  git push -u origin master //將 local 端資料 Push 到遠端
```
參數 -u 等同 --set-upstream ，可以使本地的 branch 開始追蹤指定的遠端 branch ，之後的 push 只要輸入 git push 就可以了
```
  git push -u origin master =

  git push origin master  +  
  git checkout master  +  
  git branch -u origin/master
```

6.  Fork & clone 一個開源計畫 ( open source )

左上角搜尋一個專案 ex.react ，進入後點選由上角 Fork 複製一份到自己的 repo
```
  git clone " project address "

  cd " file name "

  git checkout -b " branch name "  //切出自己的分支並進入分支( -b 是切出分支並進入)

  git commit -am " message "  //若是分支檔案有修改一樣要 commit 到 repo

  git push "branch name"  //push 上去後對方也接受就可以對原專案做出一份貢獻

  git pull upstream master  //若是完成 pull request 要記得跟 master 保持同步
```

7.  feature branch 建立
```
  git branch " example "  //建立一個叫 example 的分支

  git commit -am "message"  //commit 到本地端

  git pull origin example 
```

若是想知道自己目前位在哪個分支
```
  git branch -v  //顯示目前所在分支位置及 commit version 
```

8.  merge & delete branches 
```
  git checkout master  //移動到 master branch

  git merge example  //merge example 到 master

  git branch -d example  //刪除 example

  git pull origin master  //pull 資料上去
```

資料參考: [Git 與 Github 版本控制基本指令與操作入門教學](https://blog.techbridge.cc/2018/01/17/learning-programming-and-coding-with-python-git-and-github-tutorial/)
、[淺談：我的前端學習之路](https://medium.com/@ClayGao/%E8%AB%87%E8%AB%87%E6%88%91%E7%9A%84%E5%89%8D%E7%AB%AF%E5%AD%B8%E7%BF%92%E4%B9%8B%E8%B7%AF-aeb1cbe55e6a)

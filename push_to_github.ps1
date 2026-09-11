[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Set-Location -Path $PSScriptRoot

Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host "  刑法 3-Column 知識庫筆記 - GitHub 一鍵提交與發布腳本" -ForegroundColor Cyan
Write-Host "======================================================================" -ForegroundColor Cyan
Write-Host ""

# 0. 檢查 Git 是否安裝
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "[錯誤] 系統未偵測到 Git 指令，請先安裝 Git for Windows (https://git-scm.com/)！" -ForegroundColor Red
    Write-Host ""
    Read-Host "按 Enter 鍵結束..."
    Exit
}

# 1. 檢查是否已建立 Git 倉庫
if (-not (Test-Path ".git")) {
    Write-Host "[初始化] 尚未偵測到 Git 倉庫，正在為您初始化 git init..." -ForegroundColor Yellow
    git init
    git branch -M main
    Write-Host ""
}

# 2. 顯示 Git 狀態
Write-Host "[步驟 1/4] 檢查工作區檔案變更狀態..." -ForegroundColor Green
git status -s
Write-Host ""

# 3. 詢問 Commit 訊息
$defaultMsg = "feat: 建立 Note 3 Column 現代三欄式刑法筆記與論罪模擬器"
Write-Host "[步驟 2/4] 請輸入本次 Commit 訊息" -ForegroundColor Green
$userMsg = Read-Host "[直接按 Enter 將使用預設訊息: '$defaultMsg']"
if ([string]::IsNullOrWhiteSpace($userMsg)) {
    $commitMsg = $defaultMsg
} else {
    $commitMsg = $userMsg
}

Write-Host ""
Write-Host "準備提交訊息: '$commitMsg'" -ForegroundColor Gray
Write-Host ""

# 4. 暫存與提交
Write-Host "[步驟 3/4] 正在暫存與提交版本 (git add & commit)..." -ForegroundColor Green
git add -A
git commit -m "$commitMsg"

# 5. 檢查遠端倉庫
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host ""
    Write-Host "[提示] 尚未設定遠端 GitHub 倉庫網址。" -ForegroundColor Yellow
    Write-Host "請先至 GitHub 網站建立一個名為 criminal-law-notes 的倉庫。" -ForegroundColor Gray
    $inputRepo = Read-Host "請輸入您的 GitHub 倉庫網址 (例如 https://github.com/您的帳號/criminal-law-notes.git)"
    if (-not [string]::IsNullOrWhiteSpace($inputRepo)) {
        git remote add origin $inputRepo.Trim()
        Write-Host "[+] 已成功綁定遠端倉庫: $inputRepo" -ForegroundColor Green
    } else {
        Write-Host "[!] 未輸入倉庫網址，略過推送步驟。" -ForegroundColor Yellow
        Write-Host ""
        Read-Host "按 Enter 鍵結束..."
        Exit
    }
}

# 6. 推送至 GitHub
Write-Host ""
Write-Host "[步驟 4/4] 正在推送更新至 GitHub (git push -u origin main)..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "[提示] 直接推送遭拒，正在嘗試以 rebase 模式同步遠端 (git pull --rebase origin main)..." -ForegroundColor Yellow
    git pull --rebase origin main
    git push -u origin main
}

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "======================================================================" -ForegroundColor Green
    Write-Host "  [成功] 專案已成功推送到 GitHub！" -ForegroundColor Green
    Write-Host ""
    Write-Host "  GitHub Pages 啟用說明:" -ForegroundColor White
    Write-Host "    1. 前往 GitHub 倉庫頁面 Settings -> Pages" -ForegroundColor Gray
    Write-Host "    2. 在 Branch 選擇 main / (root) 並點擊 Save" -ForegroundColor Gray
    Write-Host "    3. 稍候 1-2 分鐘即可擁有專屬線上筆記網址！" -ForegroundColor Gray
    Write-Host "======================================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "[錯誤] 推送失敗！請確認網路連線、GitHub 帳號權限或是否有衝突。" -ForegroundColor Red
}

Write-Host ""
Read-Host "按 Enter 鍵結束..."

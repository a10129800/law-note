@echo off
cd /d "%~dp0"
echo Restoring clean UTF-8 index.html from visual.html...
copy /y visual.html index.html
echo.
echo [OK] index.html has been successfully restored!
echo Please refresh your browser (press F5).
pause

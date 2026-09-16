@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"

where git >nul 2>&1
if errorlevel 1 (
	echo Git was not found. Please install Git and try again.
	pause
	exit /b 1
)

if not exist ".git" (
	echo This folder is not a Git repository.
	pause
	exit /b 1
)

echo Adding all project changes...
git add -A
if errorlevel 1 (
	echo Failed to stage changes.
	pause
	exit /b 1
)

set "COMMIT_MESSAGE=%~1"
if not defined COMMIT_MESSAGE set "COMMIT_MESSAGE=chore: update criminal law notes"

git diff --cached --quiet
if errorlevel 1 (
	echo Committing: !COMMIT_MESSAGE!
	git commit -m "!COMMIT_MESSAGE!"
	if errorlevel 1 (
		echo Commit failed.
		pause
		exit /b 1
	)
) else (
	echo No new changes to commit.
)

echo Pushing to GitHub...
git push origin HEAD
if errorlevel 1 (
	echo Push failed. Check your GitHub login and network connection.
	pause
	exit /b 1
)

echo.
echo Push completed successfully.
echo GitHub Pages may take 1-2 minutes to deploy.
pause

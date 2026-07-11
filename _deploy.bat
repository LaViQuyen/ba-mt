@echo off
rem Thu muc hien tai da la project folder khi double-click tu File Explorer

(
    echo === STEP 1: npm run build ===
    call npm run build
    echo BUILD_EXIT=%ERRORLEVEL%
) > _deploy.log 2>&1

findstr /C:"BUILD_EXIT=0" _deploy.log > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo BUILD FAILED - xem _deploy.log
    pause
    exit /b 1
)

(
    echo.
    echo === STEP 2: firebase deploy --only hosting ===
    call firebase deploy --only hosting
    echo FIREBASE_EXIT=%ERRORLEVEL%
) >> _deploy.log 2>&1

findstr /C:"FIREBASE_EXIT=0" _deploy.log > nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo FIREBASE FAILED - xem _deploy.log
    pause
    exit /b 1
)

(
    echo.
    echo === STEP 3: git commit + push ===
    git add .
    git commit -m "Fix mobile responsive: modal overflow, AdminPage layout+color #2B6830, LandingPage h1 font, remove sync btn, fix CSS build"
    echo.
    echo --- push company ---
    git push company main
    echo PUSH_CO=%ERRORLEVEL%
    echo.
    echo --- push personal ---
    git push personal main
    echo PUSH_PE=%ERRORLEVEL%
    echo.
    echo === ALL DONE ===
) >> _deploy.log 2>&1

echo Hoan tat! Xem _deploy.log de kiem tra ket qua.
pause

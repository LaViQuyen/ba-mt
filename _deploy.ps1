$ErrorActionPreference = "Continue"
$proj = "C:\BEABLEVN\2SOL\SOURCE-CODE\2SOL - `u{1ee8}NG D`u{1ee4}NG EXAM (SOURCE CODE)"
Set-Location $proj

$log = Join-Path $proj "_deploy.log"
"=== START $(Get-Date) ===" | Out-File $log -Encoding utf8

# STEP 1: npm run build
"=== STEP 1: npm run build ===" | Add-Content $log
$buildOutput = cmd /c "npm run build 2>&1"
$buildOutput | Add-Content $log
$buildExit = $LASTEXITCODE
"Exit code: $buildExit" | Add-Content $log

if ($buildExit -ne 0) {
    "*** BUILD FAILED ***" | Add-Content $log
    Write-Host "BUILD FAILED. Xem _deploy.log"
    Read-Host "Press Enter to exit"
    exit 1
}
"=== BUILD SUCCESS ===" | Add-Content $log

# STEP 2: firebase deploy
"=== STEP 2: firebase deploy --only hosting ===" | Add-Content $log
$fireOutput = cmd /c "firebase deploy --only hosting 2>&1"
$fireOutput | Add-Content $log
$fireExit = $LASTEXITCODE
"Exit code: $fireExit" | Add-Content $log

if ($fireExit -ne 0) {
    "*** FIREBASE DEPLOY FAILED ***" | Add-Content $log
    Read-Host "Press Enter to exit"
    exit 1
}
"=== FIREBASE DEPLOY SUCCESS ===" | Add-Content $log

# STEP 3: git
"=== STEP 3: git commit + push ===" | Add-Content $log
cmd /c "git add ." | Add-Content $log
cmd /c 'git commit -m "Fix mobile responsive: modal overflow, AdminPage layout+color #2B6830, LandingPage h1 font, remove sync button, fix CSS build" 2>&1' | Add-Content $log

$pushCo = cmd /c "git push company main 2>&1"
$pushCo | Add-Content $log
if ($LASTEXITCODE -eq 0) { "=== PUSH COMPANY SUCCESS ===" | Add-Content $log }
else { "*** PUSH COMPANY FAILED ***" | Add-Content $log }

$pushPe = cmd /c "git push personal main 2>&1"
$pushPe | Add-Content $log
if ($LASTEXITCODE -eq 0) { "=== PUSH PERSONAL SUCCESS ===" | Add-Content $log }
else { "*** PUSH PERSONAL FAILED ***" | Add-Content $log }

"=== ALL DONE $(Get-Date) ===" | Add-Content $log
Write-Host "Hoan tat! Xem _deploy.log"
Read-Host "Press Enter to exit"

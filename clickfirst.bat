@echo off
cls
if exist node_modules (
  echo You've already installed Important Files.
  echo Run UNISAS App to start the bot :)
pause
) else (
  call npm i >> NUL
  echo Succesfully installed!
  echo Run UNISAS App to start the bot :)
pause
)
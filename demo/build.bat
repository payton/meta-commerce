@echo off
dir;
set /p file=File:
set /p title=Title:
set /p price=Price:
exiftool -config "..\exiftool.config" -exif:metacommerce="{\"price\":\"%price%\", \"title\":\"%title%\"}" ".\%file%"
echo Built %file% with a title of %title% and price of %price%
pause

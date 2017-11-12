@echo off
set /p file=File:
set /p price=Price:
exiftool -config "..\exiftool.config" -exif:metacommerce="{\"price\":\"%price%\"}" ".\%file%"
echo Built %file% with a price of %price%
pause

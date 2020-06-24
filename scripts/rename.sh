#!/bin/bash


#purilens-plus-12-bottle-pack
#ls -l www/images/purilens14*

files_result="$(ls www/images/purilens14*)"
echo "$files_result"
echo "-----------"
IFS=$'\n'
read -rd '' -a files <<< "$files_result"
printf "files: $files[*]"
echo "-----------"
for file in "${files[@]}"; do
  printf "$file\n"
  new_file=${file/purilens14/purilens-plus-12-bottle-pack}
  mv $file $new_file
done
ls -l www/images/purilens*
echo "-----------"


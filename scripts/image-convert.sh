#!/bin/bash
#./image-convert purilens-plus-3-bottle-pack

echo $1
web_image_dir="."
src_dir=../src
images_dir=assets/images
image_dir=$src_dir/$images_dir
web_image_dir=${image_dir/$src_dir/$web_image_dir}
main_jpeg_image_path="${image_dir}/${1}.jpeg"
cp $1.jpeg $main_jpeg_image_path
convert $1.jpeg $image_dir/$1.webp
convert -resize 25% $image_dir/$1.jpeg $image_dir/$1-smallest.jpeg
convert -resize 33% $image_dir/$1.jpeg $image_dir/$1-smaller.jpeg
convert -resize 50% $image_dir/$1.jpeg $image_dir/$1-small.jpeg
convert -resize 75% $image_dir/$1.jpeg $image_dir/$1-medium.jpeg

convert -resize 25% $image_dir/$1.webp $image_dir/$1-smallest.webp
convert -resize 33% $image_dir/$1.webp $image_dir/$1-smaller.webp
convert -resize 50% $image_dir/$1.webp $image_dir/$1-small.webp
convert -resize 75% $image_dir/$1.webp $image_dir/$1-medium.webp

get_image_width()
{
  image_identify_result="$(magick identify ${image_dir}/$1*)"
  IFS=$'\n'
  read -rd '' -a image_identify_array <<< "$image_identify_result"
  image_widths=""
  for image_identify in "${image_identify_array[@]}"; do
    IFS=' '
    read -rd '' -a image_identify_tokens <<< "$image_identify"
    image_path="${image_identify_tokens[0]}"
    image_name="${image_path##*/}"
    if [[ "${image_name}" == *${2} ]]; then
      IFS=$'x'
      read -rd '' -a dimensions <<< "${image_identify_tokens[2]}"
      image_width="${image_name} ${dimensions[0]}"
      echo "$image_width"
    fi
  done
}

get_image_width $1 jpeg

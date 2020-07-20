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

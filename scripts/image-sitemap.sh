#!/bin/bash
#./image-sitemap.sh

web_url="http://buycontactlenssolutions.com"
src_dir=../src
sitemap_file=$src_dir/sitemap.xml
images_dir=assets/images
image_dir=$src_dir/$images_dir
web_image_dir=${image_dir/$src_dir/$web_url}

image_prefixes=(
  "purilens-plus-12-bottle-pack"
  "purilens-plus-3-bottle-pack"
  "scleralfil-saline-solution-30-vials"
  "scleralfil-10-ml-5-vials"
  "lobob-cds-4-oz"
  "lobob-esc-2-oz"
  "surgical-cone-mask-blue"
)

image_titles=(
  "PuriLens Plus, 12 bottles, 4 oz each, Preservative Free Saline"
  "PuriLens Plus, 3 bottles, 4 oz each, Preservative Free Saline"
  "Surgical Cone Mask, Blue"
  "ScleralFil, Preservative Free Saline Solution, 30 vials, 0.34 oz each"
  "Lobob Optimum Cleaning Disinfecting and Storage Solution, 4 oz"
  "Lobob Optimum Extra Strength Cleaner, 2 oz"
)

#$1: image
#return: $image_prefix_index
get_image_prefix_index() {
  image="${1}"
  for i in "${!image_prefixes[@]}"; do
    image_prefix_index=-1
    if [[ ${image} == ${image_prefixes[$i]}* ]]; then
      image_prefix_index=$i 
      break
    fi
  done
}

#echo image sitemap to file
get_image_sitemap()
{
  initial_images=""
  images="${initial_images}"
  images_result="$(ls $image_dir)"
  IFS=$'\n'
  #echo "" > ${sitemap_file}
  read -rd '' -a images <<< "$images_result"
  for image in "${images[@]}"; do
    image_url="${web_image_dir}/${image}"
    get_image_prefix_index $image
    if [ $image_prefix_index != -1 ]; then
      echo "<image:image>"
      echo "  <image:loc>${image_url}</image:loc>"
      echo "  <image:title>${image_titles[${image_prefix_index}]}</image:title>"
      echo "  <image:caption>${image_titles[${image_prefix_index}]}</image:caption>"
      echo "</image:image>"
    fi
  done
}

get_image_sitemap


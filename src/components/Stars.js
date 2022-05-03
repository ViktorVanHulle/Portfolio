export default function Stars( amount ) {

  let stars = amount
  stars *= "*"
  const tag = document.createElement('p')
  tag.innerHTML = stars
  console.log(stars)
  return tag
}

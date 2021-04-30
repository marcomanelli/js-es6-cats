/* CHIEDO SCUSA A CHI STIA VISIONANDO IL CODICE MA è INCOMPLETO E NON COMMENTATO CAUSA IMPEGNI URGENTI, CI RIMETTERò MANO NEL WEEKEND */

$(function() {

  const cats = [
    {
      name: 'A',
      age: 1.5,
      color: 'red',
      gender: 'male'
    },
    {
      name: 'A',
      age: 1.5,
      color: 'red',
      gender: 'male'
    },
    {
      name: 'A',
      age: 1.5,
      color: 'red',
      gender: 'male'
    },
    {
      name: 'A',
      age: 1.5,
      color: 'red',
      gender: 'male'
    },
    {
      name: 'A',
      age: 1.5,
      color: 'red',
      gender: 'male'
    },
  ]

  /* (1) */
  cats.forEach((cat) => {
    $('.section-1 ul').append(listGenerator(cat.color, cat.name))
  })

  /* (2) */
  const pink = '#E6ADCC'
  const blue = '#4D89EC'
  const newCats = cats.map((cat) => {
    
    let color = (cat.gender === 'female')? pink : blue
    let opacity = cat.age / 10
    return {
      ...cat,
      ribbon:{
        color,
        opacity
      }
    }
  })

  const femaleCats = newCats.filter((cat) => cat.gender === 'female')
  const maleCats = newCats.filter((cat) => cat.gender === 'male')

  femaleCats.forEach((cat) => {
    $('section-2 ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity))
  })

  maleCats.forEach((cat) => {
    $('section-3 ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity))
  })
})

function listGenerator(catColor, name, ...ribbon){

  let ribbonTag = ''
  if(ribbon.length > 0){
    ribbonTag = `<i class="fas fa-ribbon" style='color:${ribbon[0]}; opacity:${ribbon[1]}'></i>`
  }

  let html = `
  <li>
    <i class="fas fa-cat" style='color:${catColor}'></i>
    ${ribbonTag}
    <span>${name}</span>
  </li>
  `

  return html
}

/* export const filters = (data, requirement, type, subtype) =>{
  return data.filter((key) => {
    subtype ? key[type][subtype].includes(requirement) : key[type].includes(requirement)
  })
} */


export const filters = (data, requirement, filterType) => {
  return (filterType=="type") ? data.filter((key) => key.type.includes(requirement)) : data.filter((key) => key.generation.name.includes(requirement))
}

export const sortData = (data, sort) => {
  if (sort == "a-z"|| sort == "z-a") {
    let arraySort = data.sort((a, b) => (a.name > b.name) ? 1: -1)
    return (sort=="a-z") ? arraySort : arraySort.reverse() 
  }else{
    let arraySort = data.sort((a, b) => (a.num > b.num) ? 1: -1)
      return (sort=="cres") ? arraySort : arraySort.reverse()  
  }
};

export const calCp = (data, position, cp) => {
  return data[position].stats['max-cp'] - cp
}

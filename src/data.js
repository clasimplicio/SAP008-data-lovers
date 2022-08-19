
/* export const filters = (data, requirement, type, subtype) =>{
  return data.filter((key) => {
    subtype ? key[type][subtype].includes(requirement) : key[type].includes(requirement)
  })
} */


export const filterType = (data, requirement) => {
  return data.filter((key) => key.type.includes(requirement))
}

export const filterGeneration = (data, requirement) => {
  return data.filter((key) => key.generation.name.includes(requirement))
}

export const sortData = (data, sort) => {
  if (sort == "a-z"|| sort == "z-a") {
    let arraySort = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }
      if (a.name < b.name) {
        return -1
      }
      return 0
    })
    return (sort=="a-z") ? arraySort : arraySort.reverse() 
  }else{
    let arraySort = data.sort((a, b) => {
      if (a.num > b.num) {
        return 1
      }
      if (a.num < b.num) {
        return -1
      }
      return 0
    })
      return (sort=="cres") ? arraySort : arraySort.reverse()  
  }

};

export const calCp = (data, position, cp) => {
  return data[position].stats['max-cp'] - cp
}

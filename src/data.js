
/* export const filters = (data, requirement, type, subtype) =>{
  return data.filter((key) => {
    subtype ? key[type][subtype].includes(requirement) : key[type].includes(requirement)
  })
} */


export const filterType = (data, requirement) =>{
  return data.filter((key) => key.type.includes(requirement))
}

export const filterGeneration = (data, requirement) =>{
  return data.filter((key) => key.generation.name.includes(requirement))
}

export const sortData = (data) =>{
  return data.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }
    return 0
    }
  )
};

export const calCp = (data,position,cp)=> {
  return data[position].stats['max-cp'] - cp
}

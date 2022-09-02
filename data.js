
export const filters = (data, requirement, filterType) => {
  return (filterType=="type") ? data.filter((key) => key.type.includes(requirement)) : data.filter((key) => key.generation.name.includes(requirement))
}

export const sortData = (data, sort) => {
  if (sort == "a-z"|| sort == "z-a") {
    let arraySort = data.sort((a, b) => (a.name > b.name) ? 1: -1)
    return (sort=="a-z") ? arraySort : arraySort.reverse() 
  }else if(sort=="cres" || sort=="decres"){
    let arraySort = data.sort((a, b) => (a.num > b.num) ? 1: -1)
    return (sort=="cres") ? arraySort : arraySort.reverse()  
  }else if(sort=="atk"){
    let arraySort = data.sort((a,b) =>{
      if(parseInt(a.stats["base-attack"]) < parseInt(b.stats['base-attack'])){
        return 1
      }else if(parseInt(a.stats['base-attack']) > parseInt(b.stats['base-attack'])){
        return -1
      }else{
        return 0
      }
    })
    return arraySort
  }else{
    let arraySort = data.sort((a,b) =>{
      if(parseInt(a.stats["base-defense"]) < parseInt(b.stats['base-defense'])){
        return 1
      }else if(parseInt(a.stats['base-defense']) > parseInt(b.stats['base-defense'])){
        return -1
      }else{
        return 0
      }
    })
    return arraySort
  }
};

export const calCp = (data, position, cp) => {
  return data[position].stats['max-cp'] - cp
}

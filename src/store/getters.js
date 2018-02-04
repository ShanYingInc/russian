export const getters = {
  teachingExcellenceYears (state) {
    const yearObjects = _.uniqBy(state.teachingExcellence, 'year')
    const yearList = yearObjects.map(object => object.year)
    return yearList
  }
}

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export const formatDate = dateString => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', dateOptions)
}
const formatDateYear = (inputString: string) => convertDateStringToYear(inputString).slice(-2)

const convertDateStringToYear = (dateString: string) => new Date(dateString).getFullYear().toString()

export default formatDateYear


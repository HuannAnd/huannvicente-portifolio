const lerp = (start: number, stop: number, amount: number) => {
  return (1 - amount) * start + amount * stop
}

export default lerp
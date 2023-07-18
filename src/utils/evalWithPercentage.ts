export default function evalWithPercentage(expression: string): number {
  return eval(expression.replaceAll('%', ' * 0.01'))
}
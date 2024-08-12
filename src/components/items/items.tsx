export interface ItemsProps {
  item: string;
}

export function Items({ item }: ItemsProps) {
  return <div>{item}</div>;
}

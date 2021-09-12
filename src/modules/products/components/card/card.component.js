export function CardProduct(props) {
  const {name} = props;
  return <article className="border border-gray-400 rounded p-4 bg-gray-200">{name}</article>;
}

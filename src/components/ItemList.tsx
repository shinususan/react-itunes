import Item from "./Item";

const ItemsList = ({ items }: any) => {
  const itemsArray = items.map((item: any, index: number) => (
    <Item key={index} {...item} />
  ));
  return <div className="list-container">{itemsArray}</div>;
};

export default ItemsList;

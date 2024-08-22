import { Key } from 'react';

interface ListProps<Item> {
  as?: 'ol' | 'ul';
  items: Item[];
  children: (item: Item) => JSX.Element;
}

function List<Item extends { id: Key }>(props: ListProps<Item>): JSX.Element {
  const { as: As = 'ul', items, children } = props;

  return (
    <As>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </As>
  );
}

export type { ListProps };
export default List;

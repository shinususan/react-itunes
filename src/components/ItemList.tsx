import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Item from "./Item";

class ItemList extends React.Component<any, any> {
  constructor(props: { fetchMoreData: any; items: any }) {
    super(props);
  }

  render() {
    const { fetchMoreData, items }: any = this.props;

    return (
      <>
        {items.length > 0 ? (
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {items.map((item: any, index: number) => (
              <Item key={index} {...item} />
            ))}
          </InfiniteScroll>
        ) : (
          <p>No results found.</p>
        )}
      </>
    );
  }
}

export default ItemList;

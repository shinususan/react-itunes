import { Grid } from "@mui/material";
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
        <div className="item-list-container">
          {items.length > 0 ? (
            <InfiniteScroll
              dataLength={items.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <Grid container spacing={3}>
                {items.map((item: any, index: number) => (
                  <Grid item xs={4}>
                    <Item key={index} {...item} />
                  </Grid>
                ))}
              </Grid>
            </InfiniteScroll>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </>
    );
  }
}

export default ItemList;

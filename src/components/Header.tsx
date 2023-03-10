import { Button, TextField } from "@mui/material";
import React from "react";

class Header extends React.Component<any, any> {
  constructor(props: { mediaTypes: any; startSearch: any }) {
    super(props);
    this.state = {
      searchText: "",
      searchMedia: "all",
    };
  }

  handleSearchTextChange = (event: any) =>
    this.setState({ searchText: event.target.value });

  handleSearchMediaChange = (event: any) =>
    this.setState({ searchMedia: event.target.value });

  render() {
    const { mediaTypes, startSearch }: any = this.props;
    const { searchText, searchMedia }: any = this.state;

    return (
      <>
        <h2>iTunes Search API</h2>
        {/* Search field */}
        <TextField
          id="search"
          label="Search"
          variant="standard"
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={this.handleSearchTextChange}
        />

        {/* Search button */}
        <Button
          variant="contained"
          onClick={() => startSearch(searchText, searchMedia)}
        >
          Search
        </Button>
      </>
    );
  }
}

export default Header;

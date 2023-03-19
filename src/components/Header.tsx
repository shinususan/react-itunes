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
        <header>
          <div className="logo-wrapper">
            <div className="logo">
            </div>

            {/* Search field */}
            <div className="search-box">
              <TextField
                sx={{ width: 1 }}
                id="search"
                label="Search"
                variant="outlined"
                type="text"
                placeholder="Search songs..."
                onChange={this.handleSearchTextChange}
              />

              {/* Search button */}
              <div className="search-btn-container">
                <Button
                  variant="contained"
                  onClick={() => startSearch(searchText, searchMedia)}

                >
                  Search
                </Button>
              </div>
            </div>
            <h2>iTunes Search</h2>
          </div>
        </header>
      </>
    );
  }
}

export default Header;

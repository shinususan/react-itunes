import { Component, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemList";
import { itunesApiRequest, mediaTypes } from "./Utils";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchResults: null,
      searchText: "",
      mediaType: "all",
      offset: 0,
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  async updateSearch(text: string, media: any) {
    if (text) {
      if (text !== this.state.searchText) {
        this.setState({ searchResults: [] });
      }
      this.setState({ searchText: text });
    }
    this.setState({ offset: this.state.offset + 10 });
    const response = await itunesApiRequest(
      text ? text : this.state.searchText,
      media ? media : this.state.mediaType,
      this.state.offset
    );
    if (response) {
      this.setState({
        searchResults: [...this.state.searchResults, ...response.results],
      });
    }
  }

  render() {
    const { searchResults }: any = this.state;
    return (
      <>
        <div>
          <Header mediaTypes={mediaTypes} startSearch={this.updateSearch} />
          {this.state.searchResults ? (
            <ItemsList
              items={searchResults}
              fetchMoreData={this.updateSearch}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;

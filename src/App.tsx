import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemsList from "./components/ItemList";
import { itunesApiRequest, mediaTypes } from "./Utils";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { searchResults: [] };
    this.updateSearch = this.updateSearch.bind(this);
  }

  async updateSearch(text: string, media: any) {
    const response = await itunesApiRequest(text, media);
    this.setState({ searchResults: response.results });
  }

  render() {
    const { searchResults }: any = this.state;
    return (
      <>
        <div>
          <Header mediaTypes={mediaTypes} startSearch={this.updateSearch} />
          <ItemsList items={searchResults} />
        </div>
      </>
    );
  }
}

export default App;

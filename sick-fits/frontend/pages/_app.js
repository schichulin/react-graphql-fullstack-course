import App, { Container } from "next/app";
import MainPage from "../components/MainPage";

class MainApp extends App {
  render() {
    // dev note: Component is the current router page
    const { Component } = this.props;

    return (
      <Container>
        <MainPage>
          <Component />
        </MainPage>
      </Container>
    );
  }
}

export default MainApp;
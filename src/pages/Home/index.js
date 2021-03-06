import React from "react";
import { connect } from "react-redux";
import { Loading } from "../../components";
import Server from "../Server";
import Servers from "../Servers";
import Header from "./Header";

const HomePage = ({ selectedServer, loading }) => (
  <div className="App">
    <Header />
    {selectedServer ? (
      <Server key={selectedServer} />
    ) : (
      <Servers />
    )}
    <Loading active={loading} />
  </div>
);

const mapStateToProps = state => ({
  loading: state.loading,
  selectedServer: state.selectedServer
});

export default connect(mapStateToProps)(HomePage);

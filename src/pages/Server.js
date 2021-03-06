import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects, getSelectedProject } from "../store";
import Stacks from "./Stacks";

class ServerPage extends Component {
  componentDidMount() {
    const { fetchProjects } = this.props;

    fetchProjects();
  }

  render() {
    const { selectedProject } = this.props;

    if (selectedProject) {
      return <Stacks key={selectedProject.id} />;
    }

    return null;
  }
}

const mapStateToProps = state => ({
  selectedProject: getSelectedProject(state)
});

const mapDispatchToProps = {
  fetchProjects
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerPage);

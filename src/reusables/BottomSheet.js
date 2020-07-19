import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { Button } from "reusables/Buttons";

const modalRoot = document.getElementById("modal-root");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <Container show={this.props.show} height={this.props.height || "55vh"}>
        <Contents>{this.props.children}</Contents>
        {this.props.buttonText && (
          <div>
            <StyledButton>{this.props.buttonText}</StyledButton>
          </div>
        )}
      </Container>,
      this.el,
    );
  }
}

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
`;
const StyledButton = styled(Button)`
  width: 87%;
`;
const Container = styled.div`
  position: fixed;
  background: #2a2a2a;
  bottom: 0;
  height: ${({ height }) => height};
  right: 0;
  left: 0;
  border-radius: 30px 30px 0 0;
  color: white;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transform: ${props => (props.show ? "none" : "translateY(100vh)")};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  position: absolute;
  background-color: #000;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  z-index: 1;
  top: ${(props) => (props.placement === "bottom" ? "100%" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    ${(props) => (props.placement === "bottom" ? "top" : "bottom")}: 100%;
    ${(props) =>
      props.arrowWidth &&
      props.arrowHeight &&
      `border-width: ${props.arrowHeight}px ${props.arrowWidth / 2}px 0 ${
        props.arrowWidth / 2
      }px;`}
    ${(props) =>
      props.placement === "bottom"
        ? "border-color: transparent transparent #000 transparent;"
        : "border-color: #000 transparent transparent transparent;"}
    left: 50%;
    transform: translateX(-50%);
  }
`;

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ visible: true });
  };

  handleMouseLeave = () => {
    this.setState({ visible: false });
  };

  render() {
    const { text, children, placement, arrowWidth, arrowHeight } = this.props;
    const { visible } = this.state;

    return (
      <TooltipContainer
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
        <TooltipContent
          visible={visible}
          placement={placement}
          arrowWidth={arrowWidth}
          arrowHeight={arrowHeight}
        >
          {text}
        </TooltipContent>
      </TooltipContainer>
    );
  }
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom"]),
  arrowWidth: PropTypes.number,
  arrowHeight: PropTypes.number,
};

Tooltip.defaultProps = {
  placement: "bottom",
  arrowWidth: 8,
  arrowHeight: 8,
};

export default Tooltip;

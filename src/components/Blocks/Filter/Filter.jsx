import React, { Component } from "react";
import "./filter.scss";
import Checkbox from "../../Shared/checkbox/Checkbox";
class Filter extends Component {
  state = {
    data: [
      { checked: false, name: "LG" },
      { checked: false, name: "Lenovo" },
      { checked: false, name: "Sony" },
      { checked: false, name: "LG" }
    ]
  };
  onChangeAction(idx) {
    this.setState(prevState => {
      const newData = prevState.data.map((el, index) =>
        index === idx ? { ...el, checked: !el.checked } : el
      );
      return {
        data: [...newData]
      };
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map((item, idx) => (
          <Checkbox item={item} key={idx} onChangeAction={this.onChangeAction.bind(this, idx)} />
        ))}
      </div>
    );
  }
}

export default Filter;

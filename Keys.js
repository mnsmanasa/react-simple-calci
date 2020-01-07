import React, { Component } from "react";

class Keys extends Component {
  constructor() {
    super();
    this.state = {
      calciValue: ""
    };
  }

  render() {
    return (
      <form>
        <table cellSpacing="0">
          <tr>
            <td colspan="5">
              <input
                type="text"
                name="calcinput"
                value={this.state.calciValue}
              />
            </td>
          </tr>
          <tr>
            <td><button>1</button></td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td><button>*</button></td>
            <td rowspan="4" class="h-100"><button>=</button></td>
          </tr>
          <tr>
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>/</button></td>
          </tr>
          <tr>
            <td><button>7</button></td>
            <td><button>8</button></td>
            <td><button>9</button></td>
            <td><button>-</button></td>
          </tr>
          <tr>
            <td><button>.</button></td>
            <td><button>0</button></td>
            <td><button>C</button></td>
            <td><button>+</button></td>
          </tr>
        </table>
      </form>
    );
  }
}

export default Keys;

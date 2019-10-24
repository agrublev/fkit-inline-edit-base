import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.less";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class App extends React.Component {
    @observable tree = "sex";
    @observable contentIs = false;
    @observable textInside = "EDIT ME TEXT";

    _onChange = e => {
        // this.textInside = this.elem["innerText"];
    };
    _onPaste = e => {};
    _onKeyPress = e => {
        // this.textInside = this.elem["innerText"];
    };
    render() {
        return (
            <div className="App">
                <div
                    className={"EDIT" + (this.contentIs ? " FOCUS" : "")}
                    onClick={() => {
                        this.contentIs = true;
                        setTimeout(() => {
                            this.elem.focus();
                        }, 0);
                    }}
                    contentEditable={this.contentIs}
                    ref={elem => {
                        this.elem = elem;
                    }}
                    // dangerouslySetInnerHTML={{ __html:  }}
                    onInput={this._onChange}
                    onPaste={this._onPaste}
                    onBlur={() => {
                        this.contentIs = false;
                    }}
                >
                    {this.textInside}
                </div>
            </div>
        );
    }
}

export default hot(App);

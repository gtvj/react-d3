import React from 'react';
import { AnimatableCircle} from "./AnimatableCircle";
import { AnimatableText } from "./AnimatableText";

export class CircleAndText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { radius: 45 };
    }

    grow() {
        return this.state.radius = this.state.radius + 5;
    }

    shrink() {
        return this.state.radius >= 5 ? this.state.radius - 5 : this.state.radius;
    }

    render() {
        return (
            <div>
                <div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={() => {
                            this.setState({ radius: this.grow() })
                        }}>Larger
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            this.setState({ radius: this.shrink() })
                        }}>Smaller
                        </button>
                    </div>
                </div>
                <svg width={500} height={500}>
                    <AnimatableCircle radius={this.state.radius}/>
                    <AnimatableText text={this.state.radius}/>
                </svg>
            </div>
        );
    }
}

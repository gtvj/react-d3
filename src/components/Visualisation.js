import React from 'react';
import { STYLES } from './VisualisationStyles';

export class Visualisation extends React.Component {
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
                    <circle
                        cx={250}
                        cy={250}
                        r={this.state.radius}
                        style={STYLES.circle}
                    />
                    <text x="50.1%" y="50.8%" alignmentBaseline="middle" textAnchor="middle"
                          style={STYLES.text}>{this.state.radius}</text>
                </svg>
            </div>
        );
    }
}

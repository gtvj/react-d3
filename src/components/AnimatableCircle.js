import React from 'react';
import { STYLES } from './VisualisationStyles';

export class AnimatableCircle extends React.Component {
    render() {
        return (
            <circle
                cx={250}
                cy={250}
                r={this.props.radius * 2}
                style={STYLES.circle}
            />
        )
    }
}
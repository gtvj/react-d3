import React from 'react';
import { STYLES } from './VisualisationStyles';

export class AnimatableText extends React.Component {
    render() {
        return (
            <text x="50.1%" y="50.8%" alignmentBaseline="middle" textAnchor="middle"
                  style={STYLES.text}>{this.props.text}</text>
        )
    }
}
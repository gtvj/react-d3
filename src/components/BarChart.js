import React from 'react';

export class Bar extends React.Component {
    render() {
        return (
            <svg width={this.dimensions.chartSide} height={this.dimensions.chartSide}>
                <g>
                    <rect
                        fill={"rgba(0,0,0,0.2"}
                        x={this.props.i * (this.dimensions.barWidth + this.dimensions.paddingBetweenBars) + this.dimensions.chartMargins}
                        y={this.dimensions.chartSide - this.props.d.size - this.dimensions.chartMargins}
                        height={this.props.d.size}
                        width={this.dimensions.barWidth}
                    />
                    <text
                        x={this.props.i * (this.dimensions.barWidth + this.dimensions.paddingBetweenBars) + this.dimensions.chartMargins + this.dimensions.textLabelOffsetX}
                        y={(this.dimensions.chartSide - this.dimensions.chartMargins) + this.dimensions.textLabelOffsetY}
                        fontFamily="Helvetica"
                        fontSize="14"
                    >{this.props.d.name}
                    </text>
                </g>
            </svg>
        )
    }


    constructor() {
        super();
        this.dimensions = {
            chartSide: 500,
            barWidth: 20,
            paddingBetweenBars: 30,
            chartMargins: 50,
            textLabelOffsetX: 5,
            textLabelOffsetY: 15
        }
    }
}

export class BarChart extends React.Component {

    render() {
        return (

            <div>
                <svg width={500} height={500}>
                    {
                        this.data.map((dataPoint, index) => <Bar key={index} d={dataPoint} i={index}/>)
                    }
                </svg>
            </div>
        )
    }

    constructor() {
        super();
        this.data = [
            { name: 'A', size: 150 },
            { name: 'B', size: 250 },
            { name: 'C', size: 350 },
            { name: 'D', size: 450 },
            { name: 'E', size: 250 },
            { name: 'F', size: 150 },
            { name: 'G', size: 450 },
            { name: 'H', size: 50 },
            { name: 'I', size: 150 },
            { name: 'J', size: 150 },
        ];
    }
}
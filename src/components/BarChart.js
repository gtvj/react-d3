import React from 'react';

const dimensions = {
    chartSide: 500,
    barWidth: 20,
    paddingBetweenBars: 30,
    chartMargins: 50,
    textLabelOffsetX: 5,
    textLabelOffsetY: 15

};

export class Bar extends React.Component {
    render() {
        return (
            <svg width={dimensions.chartSide} height={dimensions.chartSide}>
                <g>
                    <rect
                        fill={"rgba(0,0,0,0.2"}
                        x={this.props.i * (dimensions.barWidth + dimensions.paddingBetweenBars) + dimensions.chartMargins}
                        y={dimensions.chartSide - this.props.d.size - dimensions.chartMargins}
                        height={this.props.d.size}
                        width={dimensions.barWidth}
                    />
                    <text
                        x={this.props.i * (dimensions.barWidth + dimensions.paddingBetweenBars) + dimensions.chartMargins + dimensions.textLabelOffsetX}
                        y={(dimensions.chartSide - dimensions.chartMargins) + dimensions.textLabelOffsetY}
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
    }
}

export class BarChart extends React.Component {

    render() {
        return (

            <div>
                <svg width={500} height={500}>
                    <g
                        id={'axis_y'}
                        transform={`translate(${dimensions.chartMargins - 20},${dimensions.chartMargins - 150})`}
                    >
                    </g>
                    {
                        this.data.map((dataPoint, index) => <Bar key={index} d={dataPoint} i={index}/>)
                    }
                </svg>
            </div>
        )
    }


    componentDidMount() {

        const y = d3.scaleLinear()
            .rangeRound([dimensions.chartSide + dimensions.chartMargins, 0])
            .domain([0, d3.max(this.data, d => {
                return d.size
            })]);

        d3.select('#axis_y')
            .append('g')
            .call(d3.axisLeft(y))
            .append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Frequency');
    }

    constructor() {
        super();
        this.data = [
            { name: 'A', size: 10 },
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
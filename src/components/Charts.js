import React from 'react';
import { VictoryPie } from 'victory';

export default function Charts() {
  return (
    <VictoryPie
      height={300}
      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy', 'purple', 'green']}
      cornerRadius={({ datum }) => datum.y * 1.5}
      innerRadius={({ datum }) => datum.y * 0.5}
      data={[
        { x: 'Cats', y: 20 },
        { x: 'Dogs', y: 20 },
        { x: 'Birds', y: 10 },
        { x: 'Rats', y: 10 },
        { x: 'Fish', y: 10 },
        { x: 'Frogs', y: 10 },
        { x: 'Ferets', y: 10 },
      ]}
    ></VictoryPie>
  );
}

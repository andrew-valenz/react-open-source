import React from 'react';
import { VictoryPie } from 'victory';

export default function Charts() {
  return (
    <VictoryPie
      colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy', 'purple', 'green']}
      cornerRadius={({ datum }) => datum.y * 1.5}
      data={[
        { x: 'Cats', y: 25 },
        { x: 'Dogs', y: 25 },
        { x: 'Birds', y: 10 },
        { x: 'Rats', y: 5 },
        { x: 'Fish', y: 15 },
        { x: 'Frogs', y: 5 },
        { x: 'Ferets', y: 5 },
      ]}
    ></VictoryPie>
  );
}

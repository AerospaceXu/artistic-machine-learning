// @ts-ignore
import ml5 from 'ml5';

export const neuralNetworkCreator = (options: {
  task: string;
  debug: boolean;
  layers?: any[];
}) => ml5.neuralNetwork(options);

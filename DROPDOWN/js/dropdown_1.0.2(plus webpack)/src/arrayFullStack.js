import arrayBackend from './arrayBackend';
import arrayFrontend from './arrayFrontend';

const setArrayFullStack = new Set([...arrayBackend, ...arrayFrontend]);

export default setArrayFullStack;

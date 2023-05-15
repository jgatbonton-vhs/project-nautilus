type BaseOperationType = (x: number, y: number) => number;

export const add: BaseOperationType = (x, y) => {
    return x + y;
};

export const subtract: BaseOperationType = (x, y) => {
    return x - y;
};

export const multiply: BaseOperationType = (x, y) => {
    return x * y;
};

export const divide: BaseOperationType = (x, y) => {
    return x / y;
};

const receivesAFunction = (param) => {
    param();
}

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => () => {};
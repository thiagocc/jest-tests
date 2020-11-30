const doSomethingBefore = () => {
    return false;
};

exports.doSomethingBefore = doSomethingBefore;

const forgotPassword = () => {
    const boolean = doSomethingBefore();
    if (!boolean) {
        return true;
    }
    return false;
};

exports.forgotPassword = forgotPassword;

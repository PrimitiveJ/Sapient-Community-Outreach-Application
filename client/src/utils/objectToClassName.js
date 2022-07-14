
const objectToClassName = (...args) => {
    let classObj = [...args];

    if (typeof classObj[0] === 'object') {
        classObj = classObj[0];
    }

    return Object.values(classObj).join(' ');
}

export default objectToClassName;

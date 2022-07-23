
/*
    for dealing with css modules:

    this function converts an object/array of classnames into one class list string.
    ex: 
        objectToClassName({ classA: 'size', classB: 'font' }) => 'size font'
        objectToClassName(['size', 'font']) => 'size font'

    also takes in multiple parameters:

        objectToClassName('size', 'font') => 'size font'
        
        const variable = 'var-class';
        objectToClassName('size', variable, 'font') => 'size var-class font'

    -Will
*/
const objectToClassName = (...args) => {
    let classObj = [...args];

    if (typeof classObj[0] === 'object') {
        classObj = classObj[0];
    }

    return Object.values(classObj).join(' ');
}

export default objectToClassName;

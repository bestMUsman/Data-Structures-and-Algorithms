// values of the source object copied onto the target object  
var objFoo = {
    name: "Foo",
    property: "Bar",
    child: {
        foo: "bar",
        blah: [1, 2, 3, 4]
    },
};

var objFighters = {
    name: "Fighters",
    property: "Barnone",
    child: {
        foo: "manchu",
        additionally: "addme"
    },
    age: 15
};


// Result should equal
// {
//     name: "Fighters",   
//     property: "Barnone",
//     child: {
//         foo: "manchu",
//         additionally: "addme",
//         blah: [1,2,3,4]
//     },
//     age: 15

function deepAssign(source, target) {
    for (let key in source) {
        if (typeof source[key] == "object" && !Array.isArray(source[key]) && target[key] !== undefined) {
            target[key] = deepAssign(source[key], target[key]);
        } else {
            target[key] = source[key];
        }
    }

    return target;
}

var result = deepAssign(objFighters, objFoo);
console.log('result', result);

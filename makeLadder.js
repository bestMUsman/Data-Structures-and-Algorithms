function makeLadder(num) {
    let str = "";

    for (let i = 0; i < num; i++) {
        str += "#";
        console.log(str);
    }
}

makeLadder(4)

// OutPut: 
// #
// ##
// ###
// ####

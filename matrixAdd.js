let mat1 = [[1,2,3], [4,5,6], [7,8,9]];
let mat2 = [[1,2,3], [4,5,6], [7,8,9]];
let mat3 = [];

for(let i=0; i<3; i++) {
    let row = [];
    for(let k=0; k<3; k++) {
        row.push(mat1[i][k] + mat2[i][k]);
    }
    mat3.push(row);
}

console.log("3rd matrix is:", mat3);

var reverse = function(x) {
    const INT32_MAX = Math.pow(2, 31) - 1;
    const INT32_MIN = -Math.pow(2, 31);
    let tmp='';
    let res=0;
    if(x<0)
            {
                x=(-1)*x
                tmp+=x;
                let digs=[...tmp];
                let rev='';
                for(let z=tmp.length-1;z>=0;z--)
                {
                    rev+=digs[z];
                }
                res+=Number(rev)*(-1);
            }
            else
            {
                tmp+=x;
                let digs=[...tmp];
                let rev='';
                for(let z=tmp.length-1;z>=0;z--)
                {
                    rev+=digs[z];
                }
                res+=Number(rev);
            }

    // Check for integer overflow
    if (res > INT32_MAX || res < INT32_MIN) {
        return 0;
    }

    return res;
};
let x = 1534236469;
console.log("Digs are:",reverse(x))
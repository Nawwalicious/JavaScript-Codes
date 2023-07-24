// Strictly takes 2 word name and abbreviates it

function abbreviate(name)
{
    for(i=0; i<name.length; i++)
    {
        if(name[i]==" ")
            return ((name[0] + "." + name[i + 1])).toUpperCase();
    }
    
}

val="henry class";

console.log(abbreviate(val));
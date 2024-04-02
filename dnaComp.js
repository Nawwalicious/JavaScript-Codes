function DNAStrand(dna) {
    //your code here
    let res = ""

    for (i = 0; i < dna.length; i++)
    {
        if (dna[i] == "A" || dna[i] == "a")
            res+="T"
        else if (dna[i] == "C" || dna[i] == "c")
            res+="G"
        else if (dna[i] == "T" || dna[i] == "t")
            res+="A"
        else if (dna[i] == "G" || dna[i] == "g")
            res+="C"
    }
    return res;
}


str="AACCAA"

console.log(DNAStrand(str));
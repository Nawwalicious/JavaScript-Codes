//name starts with r or R print <name> is playing banjo:-...

function playingBanjo(name)
{
    if (name[0] == "r" || name[0] == "R")
        return `${name} is playing Banjo`
    else
        return `${name} is not playing Banjo`
}

console.log(playingBanjo("kronny"));
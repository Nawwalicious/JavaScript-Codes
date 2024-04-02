var countMatches = function(items, ruleKey, ruleValue) {
    let match=0; res=[];
    for(let i=0;i<items.length;i++)
    {
        if(ruleKey=="type")
            {
                if(items[i][0]==ruleValue)
                {res.push(items[i])}
            }
            if(ruleKey=="color")
            {
                if(items[i][1]==ruleValue)
                {res.push(items[i])}
            }
            if(ruleKey=="name")
            {
                if(items[i][2]==ruleValue)
                {res.push(items[i])}
            }
    }
    return res.length;
};

// items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"

// [ "phone",    "blue",  "pixel"  ]
// [ "computer", "silver", "lenovo" ]
// [ "phone",    "gold",   "iphone" ]

console.log(countMatches(items,ruleKey,ruleValue))
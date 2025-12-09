console.log(this);
var funf = function(aa, jk)  {
    console.log(this.name, aa, jk);
};

// funf(300);

// call apply bind
// bind

let boundedfn = funf.bind(Object,  500, "k");
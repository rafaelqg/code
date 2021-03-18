let contacts = new Map()
contacts.set('Rafael Q. Goncalves', {city: "Florianópolis", id: 1});
contacts.set('Chris Redfield', {city:  "Rancon City", id: 2});
contacts.set('Cloud Strife', {city:  "Midgar", id: 3});
contacts.set('Richter Belmont', {city:  "Transilvania", id: 4});
console.log("size", contacts.size); 
console.log(".has:",contacts.has('Rafael Q. Goncalves')); 
console.log("get:",contacts.get('Richter Belmont')); 
console.log("get:",contacts.get('Dean Winchester')); 
console.log("delete:",contacts.delete('Chris Redfield')); 
console.log("size", contacts.size); 

contacts.forEach(
    function (value, key, map) {
        console.log(key, value);
      }
);

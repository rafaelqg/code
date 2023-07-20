
const neo4j = require('neo4j-driver');// npm install --save neo4j-driver​
const driver = neo4j.driver('bolt://localhost:7688',neo4j.auth.basic('neo4j', "password"), {});
/*
create (:Person {name:'You'})​
create (:Person {name:'Someone else'})​
create (:Channel {name:'Talking about computer Science'})​
match (a:Person), (b:Channel) where a.name='You' and b.name='Talking about computer Science' create (a)-[friend:subscriber]->(b) return friend
*/
const query ="match (p1:Person) -[friends:subscriber]->(c1:Channel) return p1,friends,c1";
const session = driver.session({database:"neo4j"});
session.run(query).then((result) => {
    result.records.forEach((record) => {
        console.log(JSON.stringify(record));
    });
    session.close();
    driver.close();
  }).catch((error) => {
    console.error(error);
  });

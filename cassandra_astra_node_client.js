let credentials ={
  "clientID": "",
  "clientSecret": "",
  "token": ""
}
const { Client } = require("cassandra-driver");

async function run() {
  const client = new Client({
    cloud: {
        secureConnectBundle: "secure-connect-cassandra-db.zip",
    },
    credentials: {
        username: credentials.clientID,
        password: credentials.clientSecret,
    },
  });

  await client.connect();

  // Execute a query
  const rs = await client.execute("SELECT * FROM cassandra_keyspace.news");
  console.log(`Your cluster returned ${rs.rowLength} row(s)`);
  console.dir(rs);
  let properties = rs.columns.map(el => el.name);
  let tabularData = rs.rows;
  console.log(tabularData,properties);
  console.table(tabularData)
  await client.shutdown();
}

// Run the async function
run();

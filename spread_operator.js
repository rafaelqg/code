console.log("==== USING SPREAD OPERATOR FOR ARRAYS ====");
let programming_languages=["java script", "python", "JAVA"];
let databases=["MySQL", "PostgreSQL", "MongoDB"];
let technologies=[programming_languages, databases];
console.log("Technologies without spread:",technologies," size:", technologies.length);
technologies=[...programming_languages, ...databases];
console.log("Technologies with spread:",technologies," size:", technologies.length);

console.log("==== USING SPREAD OPERATOR FOR OBJECTS ====");
let databaseMetada={
    name:"MongoDB",
    type:"NoSQL",
};
let databaseCredentialAcessInfo={
    ip:"127.0.0.1",
    login: "app_user",
    password:"super_secret"
}
let wrapperObject={
    databaseMetada: databaseMetada,
    databaseCredentialAcessInfo: databaseCredentialAcessInfo
}
console.log("WrapperObject without spread",wrapperObject);
wrapperObject={
    ...databaseMetada,
    ...databaseCredentialAcessInfo
}
console.log("WrapperObject with spread",wrapperObject);

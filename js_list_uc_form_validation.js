<html>
    <head>
        <script>
            function validate(){
                const fieldsToBeValidated = ["name","email","phone"];
                let fieldsWithProblems = [];
                for(let key in fieldsToBeValidated){
                    let fieldName = fieldsToBeValidated[key];
                    let fieldValue = document.form_user[fieldName].value;
                    if(fieldValue === ""){
                        fieldsWithProblems.push(fieldName);
                    }
                }
                if(fieldsWithProblems.length === 0 ){
                    window.alert("Validation ok");
                }else{
                    let fieldsList = "";
                    for(let key in fieldsWithProblems){
                        fieldsList += fieldsWithProblems[key]+"\n";
                    }
                    window.alert("Validation not ok. Fields that demands attention:\n"+fieldsList);
                }

            }
        </script>
    </head>
    <body>
        <form name="form_user">
            Name: <input type="text" name="name" /><br />
            E-mail: <input type="text" name="email" /><br />
            Phone:<input type="text" name="phone" /><br />
            <input type="button" value="Validate" onclick="validate()" />
        </form>
    </body>
</html>

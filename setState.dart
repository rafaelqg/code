import 'package:flutter/material.dart';
import 'model/Contact.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter APP',
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: const MyHomePage(title: 'setState() - Example'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Contact contact=Contact("","");
  String name="";
  String email="";
  final contactNameController = TextEditingController();
  final contactEmailController = TextEditingController();

  void updateState(){
    setState(() {
      this.name=this.contact.name;
      this.email=this.contact.email;
    });
    //update TextEditingControllers
    this.contactNameController.text=this.contact.name;
    this.contactEmailController.text=this.contact.email;
  }

  void setStateA(){
    this.contact=Contact('Logan', 'wolverine@superheros.mv');
    updateState();
  }

  void setStateB(){
     this.contact=Contact('Peter Parker', 'spiderman@superheros.mv');
     updateState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(

          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              '$name',
              style: Theme.of(context).textTheme.headline4,
            ),
            Text(
              '$email',
              style: Theme.of(context).textTheme.headline6,
            ),
            Text(
              '\n',
              style: Theme.of(context).textTheme.headline6,
            ),
            const Text(
              'EDIT YOUR ACCOUNT DATA:',
            ),

            TextFormField(
                controller:contactNameController,
                decoration: const InputDecoration(
                  border: UnderlineInputBorder(),
                  labelText: 'Contact name:',
                )),
            TextFormField(
                controller:contactEmailController, //stepValue,
                decoration: const InputDecoration(
                  border: UnderlineInputBorder(),
                  labelText: 'Contact email:',
                )),
        TextButton(
          style: ButtonStyle(
            foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
          ),
          onPressed: setStateB,
          child: Text('Show State B')
        ),
        TextButton(
                style: ButtonStyle(
                  foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                ),
                onPressed: setStateA,
                child: Text('Show State A')
          ),
          ],
        ),
      ),
    );
  }
}

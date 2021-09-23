import 'package:flutter/material.dart';
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
      home: const MyHomePage(title: 'List<Widget> - Dynamic listing'),
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
  List<Widget> createElementsList(){
      var contacts=["Chris Redfied","Leon S. Kennedy","Jill Valentine","Rebecca Chambers"];
      var widgets = new List.filled(contacts.length, Text(""), growable: false);
      int i=0;
      for (var contact in contacts) {
        widgets[i]= Text(
          contact+"\n",
          style: Theme.of(context).textTheme.headline4,
        );
        i++;
      }
      return widgets;
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
          children: createElementsList(),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
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
      home: const MyHomePage(title: 'HTTP Request:: http.get'),
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
  String data="";
  String title="";
  Future<String> performHTTPRequest() async {
    String output="";
    final response = await http.get(Uri.parse('https://jsonplaceholder.typicode.com/albums/1'));
    //http://192.168.0.27:5500/messages.json
    if (response.statusCode == 200) {
      output=response.body;
      var json=jsonDecode(output);
      setState(() {
        this.data = output;
        this.title= json['title'];
      });
      print(response.body);
    } else {
      throw Exception('Failed to load data');
    }
    return output;
  }

  getHTTPRequestData(){
    performHTTPRequest();
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
          children: [
            Text(
              '$title',
              style: Theme.of(context).textTheme.headline5,
            ),
            Text(
              '$data',
              style: Theme.of(context).textTheme.headline6,
            ),
            TextButton(
              onPressed: () => getHTTPRequestData(),
              child: const Text('GET DATA'),
            ),
          ]
        ),
      ),
    );
  }
}

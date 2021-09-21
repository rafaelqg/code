import 'package:flutter/material.dart';
import 'model/Contact.dart';
import 'main.dart';


void main() {
  runApp(const MessagesExample());
}
class MessagesExample extends StatelessWidget {
  const MessagesExample({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AlertDialog and Toast',
      theme: ThemeData(
        primarySwatch: Colors.grey,
      ),
      home: const MessagesExamplePage(title: 'AlertDialog and Toast'),
    );
  }
}

class MessagesExamplePage extends StatefulWidget {
  const MessagesExamplePage({Key? key, required this.title}) : super(key: key);
  final String title;
  @override
  State<MessagesExamplePage> createState() => _MessagesExamplePageState();
}

class _MessagesExamplePageState extends State<MessagesExamplePage> {

  Future<void> _showMyDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('AlertDialog Title'),
          content: SingleChildScrollView(
            child: ListBody(
              children: const <Widget>[
                Text('Hi! It is an AlertDialog!'),
                Text('Do you want to proceed?'),
              ],
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: const Text('Confirm'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            TextButton(
              child: const Text('Cancel'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  void openAnotherWidget(){
    Navigator.push( context, MaterialPageRoute(builder: (context) => MyApp()));
  }

  void backToPreviousWidget(){
    Navigator.pop(context);
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
            const Text(
              'Messages:',
            ),

            TextButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {
                _showMyDialog();
              },
              child: Text('Dialog'),
            ),
            TextButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {
                final scaffold = ScaffoldMessenger.of(context);
                scaffold.showSnackBar(
                  SnackBar(
                    content: const Text('This is a Toast message.'),
                    action: SnackBarAction(label: 'Close', onPressed: scaffold.hideCurrentSnackBar),
                  ),
                );
              },
              child: Text('Toast'),
            )

          ],
        ),

      ),
    );
  }
}


package com.example.P20212;

import android.os.Bundle;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.StringWriter;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;


public class ActivityLocalFileHandler extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_local_file_handler);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        try {
            writeAndReadXML();
            writeAndReadJSON();
            writeAndReadXMLObject();
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    private void writeAndReadXML(){
        File file = new File(
                this.getApplicationContext().getFilesDir(),
                "myfile.xml");
        try {
            Log.i("File",file.getAbsolutePath());
            Log.i("File","Writting into file...");

            FileOutputStream fos = new FileOutputStream(file);
            DataOutputStream dos = new DataOutputStream(fos);
            dos.write("<?xml><data>test</data>".getBytes() );
            dos.close();
            fos.close();
            Log.i("File","Reading file content...");
            FileInputStream fis= new FileInputStream(file);
            DataInputStream din= new DataInputStream(fis);
            byte[] data= new byte[din.available()];
            din.readFully(data);
            String content= new String(data);
            Log.i("File","File content:"+content);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    public void writeAndReadJSON(){
        Gson gson = new GsonBuilder().create();
        Person p= new Person("Frodo Bolseiro","frodo@mail.lor","004109283624");
        String json=gson.toJson(p);
        Log.i("JSON",json);
        File file = new File(this.getApplicationContext().getFilesDir(), "file.json");
        try {
            Log.i("Writing on file JSON: " ,file.getAbsolutePath());
            FileOutputStream fos = new FileOutputStream(file);
            DataOutputStream dos = new DataOutputStream(fos);
            dos.write(json.getBytes() );
            dos.close();
            fos.close();

            Log.i("Reading file JSON:" ,file.getAbsolutePath());
            FileInputStream fis= new FileInputStream(file);
            DataInputStream din= new DataInputStream(fis);
            byte[] data= new byte[din.available()];
            din.readFully(data);
            String content= new String(data);
            din.close();
            fis.close();
            Log.i("File dir: " ,file.getAbsolutePath());
            Log.i("JSON File data: ",content);
        }catch(Exception e){
            e.printStackTrace();
        }
    }

    private void writeAndReadXMLObject()  throws Exception{
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.newDocument();
        //create root node
        Element rootTag = doc.createElement("people");//root tag
        //create child node
        Person p= new Person("Frodo Baggins","frodo.baggins@mail.lor","004109283624");
        Element firstLevel = doc.createElement("person");
        firstLevel.setAttribute("name", p.getName());
        firstLevel.setAttribute("email", p.getEmail());
        firstLevel.setAttribute("phone", p.getPhone());
        //firstLevel.setTextContent("Text content of a tag element");
        //append child node to root node
        rootTag.appendChild(firstLevel);

        //add a second object
        p= new Person("Samwise Gamgee","samwise.gamgee@mail.lor","004109285457");
        firstLevel = doc.createElement("person");
        firstLevel.setAttribute("name", p.getName());
        firstLevel.setAttribute("email", p.getEmail());
        firstLevel.setAttribute("phone", p.getPhone());
        //append child node to root node
        rootTag.appendChild(firstLevel);

        //append root with complete tree to Document
        doc.appendChild(rootTag);

        //convert XML Document to a string
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "no");
        transformer.setOutputProperty(OutputKeys.METHOD, "xml");
        transformer.setOutputProperty(OutputKeys.INDENT, "yes");
        transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
        DOMSource domSource = new DOMSource(doc);
        StringWriter sw = new StringWriter();
        StreamResult sr = new StreamResult(sw);
        transformer.transform(domSource, sr);
        Log.i("XML",sw.toString());
        //write XML string to the disk
        File file = new File(this.getApplicationContext().getFilesDir(), "xml_object.xml");
        FileOutputStream fos = new FileOutputStream(file);
        DataOutputStream dos = new DataOutputStream(fos);
        dos.write(sw.toString().getBytes());
        dos.close();
        fos.close();



        //Read XML file
        DocumentBuilderFactory dbFactoryRead = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilderRead = null;
        try {
            dBuilderRead = dbFactoryRead.newDocumentBuilder();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        }
        Document docRead = null;
        InputStream is= new FileInputStream(file);
        try {
            doc = dBuilder.parse(is);
        } catch (Exception e) {
            e.printStackTrace();
        }
        NodeList nList = doc.getElementsByTagName("people");
        for (int i = 0; i < nList.getLength(); i++) {
            NodeList childrenTags=nList.item(i).getChildNodes();
            int childrenTagsCount=childrenTags.getLength();
            Log.i("XML","Children count:"+childrenTagsCount);
            for(byte j=0;j<childrenTagsCount;j++) {
                if(childrenTags.item(j).getNodeName().equals("#text")) continue;
                Log.i("XML", "XML - node name:" + childrenTags.item(j).getNodeName());
                Log.i("XML", "XML - node text content:" + childrenTags.item(j).getTextContent());
                Log.i("XML", "XML - node attribute read:" +childrenTags.item(j).getAttributes().getNamedItem("name").getTextContent() );
                Log.i("XML", "XML - node attribute read:" +childrenTags.item(j).getAttributes().getNamedItem("email").getTextContent() );
                Log.i("XML", "XML - node attribute read:" +childrenTags.item(j).getAttributes().getNamedItem("phone").getTextContent() );
            }
        }

    }

    class Person{
        private String name;
        private String email;
        private String phone;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public Person(){

        }
        public Person(String name, String email, String phone){
            this.name=name;
            this.email=email;
            this.phone=phone;
        }
    }
}

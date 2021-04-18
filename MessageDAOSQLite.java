package DataAccessObject;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.support.annotation.Nullable;

import java.util.ArrayList;
import java.util.Date;

import entities.Contact;
import entities.Message;

public class MessageDAOSQLite extends SQLiteOpenHelper implements iMessageDAO {

    public MessageDAOSQLite(@Nullable Context context, @Nullable  String name, @Nullable  SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);

        /*
        this.getWritableDatabase().execSQL(
                "drop table  message_received"
        );
    */
        this.getWritableDatabase().execSQL("PRAGMA foreign_keys=ON;");

        this.getWritableDatabase().execSQL(
                "create table if not exists message (id integer primary key autoincrement, sent_by varchar(50), sent_to varchar(50),message varchar(255), sent_on integer, FOREIGN KEY(sent_by) REFERENCES contact(identifier), FOREIGN KEY(sent_to) REFERENCES contact(identifier)  )"
        );



    }

    @Override
    public boolean saveMessage(Message m, Contact sentBy, Contact sentTo) {
        try {
            String sql = "insert into message (sent_by,sent_to,message,sent_on) values(?,?,?,?)";
            this.getWritableDatabase().execSQL(sql, new Object[]{sentBy.getName(),sentTo.getName() ,m.getMessage(),m.getDate().getTime()});
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @Override
    public ArrayList<Message> getAllMessagesToContact(Contact c) {
        ArrayList<Message> list= new ArrayList<>();
        //String sql="select message,sent_on from message where identifier=?";
        String sql="select m.message,m.sent_on from message m join contact c on c.identifier=m.sent_by where m.sent_by=?";
        Cursor cursor= this.getReadableDatabase().rawQuery(sql,new String[]{c.getName()});
        while(cursor.moveToNext()) {
            String message=cursor.getString(0);
            Date date=new Date(cursor.getLong(1));
            Message m= new Message(message,date);
            list.add(m);
        }
        return list;
    }

    @Override
    public ArrayList<Message> getFullConversationWithContact(Contact c) {
        ArrayList<Message> list= new ArrayList<>();
        //String sql="select message,sent_on from message where identifier=?";
        String sql="select m.message,m.sent_on from message m where m.sent_by=? or m.sent_to=? order by sent_on desc";
        Cursor cursor= this.getReadableDatabase().rawQuery(sql,new String[]{c.getName(),c.getName()});
        while(cursor.moveToNext()) {
            String message=cursor.getString(0);
            Date date=new Date(cursor.getLong(1));
            Message m= new Message(message,date);
            list.add(m);
        }
        return list;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}

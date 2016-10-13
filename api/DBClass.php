<?php
class DBClass{
    private static $DB_CONNECTION_STRING = "mysql:host=127.0.0.1:3306;dbname=sgdb";
    private static $DB_USER_NAME = "root";
    private static $DB_PASSWORD = "";

    private static $db = null;

    protected static function connect(){
        self::$db = new PDO(self::$DB_CONNECTION_STRING, self::$DB_USER_NAME, self::$DB_PASSWORD);
    }

    public static function execute($sql, $values = array()){
        if(self::$db == null){
            self::connect();
        }

        $statement = self::$db->prepare($sql);
        $statement->execute($values);
        return $statement;
    }

    public static function query($sql, $values = array()){
        $statement = self::execute($sql, $values);
        return $statement->fetchAll(PDO::FETCH_CLASS);
    }

}
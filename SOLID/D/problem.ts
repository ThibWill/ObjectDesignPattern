// Module bas niveau
class MySQLConnection
{
    connect()
    {
        // Gére la connexion à la base de données
        return 'Database connection';
    }
}

// Module haut niveau
class PasswordReminder
{
    private dbConnection;
    // Dépend d'un module de bas niveau
    constructor(dbConnection: MySQLConnection)
    {
        this.dbConnection = dbConnection;
    }
}
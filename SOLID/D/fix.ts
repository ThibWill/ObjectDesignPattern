interface DBConnectionInterface
{
    connect(): string;
}


// Module bas niveau
class MySQLConnection implements DBConnectionInterface
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
    // Dépend d'une abstraction
    constructor(dbConnection: DBConnectionInterface)
    {
        this.dbConnection = dbConnection;
    }
}
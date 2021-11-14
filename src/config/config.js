
module.exports = {
    port: process.env.PORT || 8184,
    db: {
        database: process.env.DB_NAME || 'cloudstores',
        user: process.env.DB_USER || 'cloudstores',
        password: process.env.DB_PASS || 'cloudstores',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storate: '../tab_tracker.sqlite'
        }
    }
}
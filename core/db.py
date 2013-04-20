import web, settings

db = web.database(dbn=settings.DB_TYPE,
    host=settings.DB_HOST,
    db=settings.DB_NAME,
    user=settings.DB_USER,
    pw=settings.DB_PWD)
	

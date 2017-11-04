import pymysql.cursors

m_host="localhost"
m_user="root"
m_password=""
m_db="equal"


def createUser(age,sex,location):
    connection=pymysql.connect(host=m_host,
                                 user=m_user,
                                 password=m_password,
                                 db=m_db,
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)

    try:
        with connection.cursor() as cursor:
            print("connected")
            query="SELECT ID FROM region WHERE Name='"+location+"';"
            cursor.execute(query)
            regId=cursor.fetchone()

            s="'"+str(regId["ID"])+"','"+sex+"','"+age+"'"
            query2="INSERT INTO User (RegionID,Sex,Age) VALUES("+s+");"
            print(query2)
            cursor.execute(query2)
        # connection is not autocommit by default. So you must commit to save
        # your changes.
        connection.commit()
    finally:
        connection.close()
createUser("20","Male","Kenya")

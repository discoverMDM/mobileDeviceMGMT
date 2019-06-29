<%@ page import="java.sql.*" %>
<html>

<head>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

<title>Login</title>

</head>

<body>


<%! String userdbName;

String userdbPsw;

String dbUsertype;

%>

<%

Connection con= null;

PreparedStatement ps = null;

ResultSet rs = null;



String driverName = "com.mysql.jdbc.Driver";

String url = "jdbc:mysql://localhost:3306/mdm";

String user = "root";

String dbpsw = "Dhivya@11";



String sql = "select * from userinfo where username=? and pwd=?";



String name = request.getParameter("email");

String password = request.getParameter("pass");




if((!(name.equals(null) || name.equals("")) && !(password.equals(null) || 
password.equals(""))) )

{

try{

Class.forName(driverName);

con = DriverManager.getConnection(url, user, dbpsw);

ps = con.prepareStatement(sql);

ps.setString(1, name);

ps.setString(2, password);

rs = ps.executeQuery();

if(rs.next())

{ 

userdbName = rs.getString("name");

userdbPsw = rs.getString("password");

if(name.equals(userdbName) && password.equals(userdbPsw))

{

session.setAttribute("name",userdbName);

session.setAttribute("usertype", dbUsertype); 

response.sendRedirect("selectteam.html"); 

} 

}

else

response.sendRedirect("index.html");

rs.close();

ps.close(); 

}

catch(SQLException sqe)

{

out.println(sqe);

} 

}

else

{

%>

<center><p style="color:red">Error In Login</p></center>

<% 

getServletContext().getRequestDispatcher("/home.jsp").include(request, 
response);

}

%>

</body>

</html>
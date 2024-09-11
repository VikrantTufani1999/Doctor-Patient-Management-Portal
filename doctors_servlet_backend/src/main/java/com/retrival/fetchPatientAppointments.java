package com.retrival;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.google.gson.Gson;

/**
 * Servlet implementation class fetchName
 * http://localhost:8080/project/fetchPatientAppointments
 */

@WebServlet("/fetchPatientAppointments")
public class fetchPatientAppointments extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// TODO Auto-generated method stub
		String url = "jdbc:mysql://localhost:3306/portal_db";
		String user = "root";
		String dbPassword = "123456";
		String query = "select apt_id, p.patient_id, p.name, time from appointments a left join patients p on p.patient_id = a.patient_id;";
		response.setContentType("application/json");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		JSONObject json = new JSONObject();
		List<Map<String, String>> list = new ArrayList<>();
		
		System.out.println("Fetching Patients Appointments");
		try {

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, user, dbPassword);
			PreparedStatement st = con.prepareStatement(query);
			
			ResultSet rs = st.executeQuery();
			
			// Extract data from result set
			while (rs.next()) {
				// Retrieve by column name
				Map<String,String> map = new HashMap<>();
				map.put("apt_id", rs.getString("apt_id"));
				map.put("patient_id", rs.getString("patient_id"));
				map.put("name", rs.getString("name"));
				map.put("time", rs.getString("time"));
				list.add(map);
			}

			rs.close();
			
			String data = new Gson().toJson(list);
			
			json.put("status", "successful");
			json.put("data", data);
			
			out.print(json);
			out.flush();

		} catch (Exception e) {
			json.put("status", "failed");
			out.print(json);
			out.flush();
			e.printStackTrace();
		}
					
		}
}

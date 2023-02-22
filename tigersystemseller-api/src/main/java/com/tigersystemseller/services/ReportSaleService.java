package com.tigersystemseller.services;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

@Service
public class ReportSaleService {
    @Value("classpath:reports/relatorio-venda.jrxml")
	private Resource reportSale;
    @Autowired
    private DataSource dataSource;
    public byte[] createReport() {
    	//try with resources
    	try (
    	     Connection connection = dataSource.getConnection();
        ){
    		JasperReport compileReport = JasperCompileManager.compileReport(reportSale.getInputStream());
    		Map<String,Object> params = new HashMap<>();
    		JasperPrint print = JasperFillManager.fillReport(compileReport, params, connection);
    		
    		//Retorna array de bytes
    		return JasperExportManager.exportReportToPdf(print);
    	} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	return null;
    }
}

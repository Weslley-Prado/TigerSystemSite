package com.tigersystemseller.rest.reports;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tigersystemseller.services.ReportSaleService;



@RestController
@RequestMapping("/api/report-sales")
@CrossOrigin("*")
public class ReportSales {

	
	@Autowired
	private ReportSaleService reportSaleService;
	
	@GetMapping
	public ResponseEntity<byte[]> reportSales(){
		var reportCreated =  reportSaleService.createReport();
		var headers = new HttpHeaders();
		var fileName = "relatorio-vendas.pdf";		
		headers.setContentDispositionFormData("inline, filename=\"" +fileName+ "\"", fileName);
		headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
	    var responseEntity = new ResponseEntity<>(reportCreated, headers, HttpStatus.OK);	
	    
	    return responseEntity;
	}
}

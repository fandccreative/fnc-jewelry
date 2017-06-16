/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.fnc.main.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jetberay
 */

@RestController
public class HomeController {

    @RequestMapping("/")
    public String home(){
        return "Hello, Spring Boot & Jet!";
    }
    
    public String getMe(){
        return "Hello ME!";
    }
}

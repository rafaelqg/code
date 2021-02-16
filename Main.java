/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package example.oo.main;

import example.oo.entities.Product;


public class Main {
    public static void main (String[] args){
        Product p1 = new Product();
        p1.setDescription("Bread");
        p1.setPrice(0.50);
        
        Product p2 = new Product();
        p2.setDescription("Water 1L");
        p2.setPrice(2.25);
        
        System.out.println(p1.getDescription()+ " "+ String.valueOf(p1.getPrice()));
        System.out.println(p2.getDescription()+ " "+ String.valueOf(p2.getPrice()));
    }
}

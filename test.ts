import test from "ava";
import { User, Product } from "./index"; 

test("Testeo la clase Product y sus métodos", function (t){
    const producto = new Product ("iPhone", 10000); 
    t.is(producto.name, "iPhone");
    t.is(producto.price, 10000); 
   
}); 


test("Testeo la clase User", function (t){
    const sabri = new User("Sabri");
    const producto = new Product ("iPhone", 10000); 
    sabri.addProduct (producto); 

    t.is(sabri.name, "Sabri");
    t.is(sabri.products[0].name, "iPhone");
    t.is(sabri.products[0].price, 10000);
}); 

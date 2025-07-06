package com.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load Spring context from AppConfig
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        // Get the BookService bean
        BookService bookService = context.getBean(BookService.class);

        // Call a method to test
        bookService.addBook("The Spring Journey");
    }
}

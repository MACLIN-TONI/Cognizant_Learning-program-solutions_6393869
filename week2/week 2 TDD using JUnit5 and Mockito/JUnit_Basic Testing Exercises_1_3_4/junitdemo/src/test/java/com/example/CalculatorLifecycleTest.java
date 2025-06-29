package com.example;

import org.junit.*;

import static org.junit.Assert.*;

public class CalculatorLifecycleTest {

    private Calculator calc;

    @Before
    public void setUp() {
        System.out.println("Setup: creating calculator instance");
        calc = new Calculator();  // Arrange
    }

    @After
    public void tearDown() {
        System.out.println("Teardown: clearing calculator");
        calc = null;
    }

    @Test
    public void testMultiply() {
        // Act
        int result = calc.multiply(4, 3);
        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testDivide() {
        int result = calc.divide(20, 5);
        assertEquals(4, result);
    }
}

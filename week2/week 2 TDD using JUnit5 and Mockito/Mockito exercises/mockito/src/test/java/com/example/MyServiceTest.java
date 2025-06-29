package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Step 1: Mock ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub getData() to return "Mock Data"
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into service and test
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert result is as expected
        assertEquals("Mock Data", result);
    }

    @Test
public void testVerifyInteraction() {
    // Step 1: Create mock
    ExternalApi mockApi = mock(ExternalApi.class);

    // Step 2: Create service and call method
    MyService service = new MyService(mockApi);
    service.fetchData(); // this should internally call mockApi.getData()

    // Step 3: Verify that getData() was called exactly once
    verify(mockApi).getData();  // or verify(mockApi, times(1)).getData();
}

}

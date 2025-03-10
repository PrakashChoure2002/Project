package com.freshThreads.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ApiResponse2 {
    private boolean success;
    private String message;
    private Object data;
}
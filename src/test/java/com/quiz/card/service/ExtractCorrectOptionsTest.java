package com.quiz.card.service;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractCorrectOptionsTest {

    @Test
    public void testExtractCorrectOptions() {
        String[] testCases = {
            "AWS Software Development Kit is correct.",
            "\"AWS Software Development Kit\" is correct.",
            "\"AWS Software Development Kit\" and \"AWS CLI\" are correct.",
            "\"Patch management\", \"Monitoring\" and \"Data encryption\" are correct.",
            "Multi-AZ maintains standby replicas of RDS instances in different availability zones is correct."
        };
        
        String[] expectedOutputs = {
            "AWS Software Development Kit",
            "AWS Software Development Kit", 
            "AWS Software Development Kit,AWS CLI",
            "Patch management,Monitoring,Data encryption",
            "Multi-AZ maintains standby replicas of RDS instances in different availability zones"
        };

        for (int i = 0; i < testCases.length; i++) {
            Set<String> result = extractCorrectOptions(testCases[i]);
            System.out.println("Input: " + testCases[i]);
            System.out.println("Output: " + result);
            
            if (!expectedOutputs[i].isEmpty()) {
                String[] expected = expectedOutputs[i].split(",");
                assertEquals(expected.length, result.size(), "Size mismatch for test case: " + testCases[i]);
                
                for (String exp : expected) {
                    assertTrue(result.contains(exp.trim()), "Missing expected option '" + exp + "' in result for: " + testCases[i]);
                }
            }
        }
    }

    private Set<String> extractCorrectOptions(String explanation) {
        java.util.HashSet<String> correctOptions = new java.util.HashSet<>();

        Pattern areCorrectPattern = Pattern.compile("\"([^\"]+)\"\\s+are\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher areCorrectMatcher = areCorrectPattern.matcher(explanation);
        while (areCorrectMatcher.find()) {
            String match = areCorrectMatcher.group(1).trim();
            String[] parts = match.split(",|\\s+and\\s+");
            for (String part : parts) {
                part = part.trim().replaceAll("^\"|\"$", "");
                if (!part.isEmpty()) {
                    correctOptions.add(part);
                }
            }
        }

        Pattern isCorrectPattern = Pattern.compile("\"([^\"]+)\"\\s+(?:is|are)\\s+correct", Pattern.CASE_INSENSITIVE);
        Matcher isCorrectMatcher = isCorrectPattern.matcher(explanation);
        while (isCorrectMatcher.find()) {
            String option = isCorrectMatcher.group(1).trim();
            if (!option.isEmpty()) {
                correctOptions.add(option);
            }
        }

        return correctOptions;
    }
}
